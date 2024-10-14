import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import Typography from '@components/Typography/Typography';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { auth } from '@core/lib/firebase';
import { UserRole, refetchFamilyProfile, setRole } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import API from '@core/services';
import Banner from '@modules/Auth/Banner/Banner';
import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const FamilySignUpPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    isLoading,
    error,
    mutate: signup,
  } = useMutation(API.family.auth.familySignup, {
    async onSuccess(family) {
      dispatch(setRole(UserRole.FAMILY));

      const { user }: { user: any } = await signInWithEmailAndPassword(
        auth,
        family.email,
        formik.values.password
      );
      localStorage.setItem(
        localStorageKeys.FIREBASE_TOKENS,
        JSON.stringify({
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        })
      );
      localStorage.setItem(localStorageKeys.ROLE, UserRole.FAMILY);
      dispatch(refetchFamilyProfile());
      showToast('Account created successfully!');
      router.push('/family/onboarding');
    },
    onError() {
      showToast('Unable to create account, please try again!');
    },
  });

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      signup({
        name: values.name,
        email: values.email,
        password: values.password,
        ...(router.query.invitationId && { familyInviteId: router.query.invitationId as string }),
      });
    },
  });

  useEffect(() => {
    formik.setFieldValue('email', router.query.email || '');
    formik.setFieldValue('name', router.query.name || '');
  }, []);

  return (
    <div className="h-screen flex flex-col md:flex-row md:items-center">
      <Head>
        <title>Login</title>
      </Head>

      <Banner />

      <div className="flex lg:items-center justify-center py-4 md:py-0  md:w-1/2 px-6 lg:px-0">
        <div className="lg:max-w-[420px] flex-grow">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <Typography variation="title0" className="text-center md:text-left">
                Sign Up
              </Typography>

              <FormikTextInput
                name="name"
                className="mt-6"
                disabled={typeof router?.query?.name === 'string'}
                label="Your name"
                placeholder="Enter your name"
              />

              <FormikTextInput
                name="email"
                type="email"
                disabled={typeof router?.query?.email === 'string'}
                className="mt-6"
                label="Your email"
                placeholder="Enter your email"
              />

              <FormikTextInput
                name="password"
                className="mt-6"
                type="password"
                label="Your password"
                placeholder="Enter your password"
              />

              <FormikTextInput
                name="confirmPassword"
                className="mt-6"
                type="password"
                label="Confirm password"
                placeholder="Confirm password created"
              />

              <ErrorMessage error={error} />

              <Typography variation="description1" className="text-center text-positiveAction mt-6">
                Discover the College Costs Secrets! It&apos;s free.
              </Typography>

              <Button type="submit" loading={isLoading} className="mt-3 w-full rounded-full">
                GET STARTED
              </Button>

              <div className="flex justify-center">
                <Link
                  href="/family/login"
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

export default FamilySignUpPage;
