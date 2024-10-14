import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import Typography from '@components/Typography/Typography';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { auth } from '@core/lib/firebase';
import { UserRole, setRole } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import API from '@core/services';
import Banner from '@modules/Auth/Banner/Banner';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().trim().email('Invalid email address').required('Email is required'),
  password: Yup.string().trim().required('Password is required'),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const FinancialAgentSignUpPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    isLoading,
    error,
    mutate: signUpAgent,
  } = useMutation(API.auth.agentSignUp, {
    async onSuccess(res: any) {
      const { user }: { user: any } = await signInWithEmailAndPassword(
        auth,
        res.email,
        formik.values.password
      );
      localStorage.setItem(
        localStorageKeys.FIREBASE_TOKENS,
        JSON.stringify({
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        })
      );
      localStorage.setItem(localStorageKeys.ROLE, UserRole.FINANCIAL_AGENT);

      dispatch(setRole(UserRole.FINANCIAL_AGENT));
      axios.defaults.headers.common.Authorization = `Bearer ${user.accessToken}`;
      showToast('Sign up successful!');
      router.push('/agent/dashboard');
    },
    onError() {
      showToast('Unable to signup, please try again!');
    },
  });

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      signUpAgent({
        invitationId: router.query?.invitationId as string,
        password: values.password,
      });
    },
  });

  useEffect(() => {
    formik.setFieldValue('email', router.query?.email || '');
  }, [router.query?.email]);

  return (
    <div className="h-screen w-screen flex">
      <Head>
        <title>Sign Up</title>
      </Head>

      <Banner />

      <div className="px-6 lg:px-0 flex justify-center w-full mt-[15vh] lg:w-1/2">
        <div className="lg:max-w-[430px] mx-auto">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <Typography variation="title0" className="text-center md:text-left">
                Financial Agent Sign Up
              </Typography>

              <FormikTextInput
                name="email"
                type="email"
                disabled={typeof router?.query?.email === 'string'}
                className="mt-8"
                label="Your email"
                placeholder="Enter your email"
              />

              <FormikTextInput
                name="password"
                className="mt-8"
                type="password"
                label="Your password"
                placeholder="Enter your password"
              />

              <FormikTextInput
                name="confirmPassword"
                className="mt-8"
                type="password"
                label="Confirm password"
                placeholder="Confirm password created"
              />

              <ErrorMessage error={error} />

              <div className="flex flex-col items-center">
                <Button
                  type="submit"
                  variation="landing"
                  loading={isLoading}
                  className="mt-3 w-full rounded-full">
                  Sign up
                </Button>
                <Link
                  href="/agent/login"
                  className="mt-6 flex font-bold text-description1 text-actionGreen hover:underline space-x-1">
                  <span className="text-darker">Already have an account ?</span>{' '}
                  <Typography variation="description1">Sign in</Typography>
                </Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default FinancialAgentSignUpPage;
