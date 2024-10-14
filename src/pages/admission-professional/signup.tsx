import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import Typography from '@components/Typography/Typography';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { auth } from '@core/lib/firebase';
import { UserRole, setRole } from '@core/redux/reducers/authSlice';
import API from '@core/services';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

const SignUpPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    isLoading: loadingAdmissionProfessional,
    error: errorAdmissionProfessional,
    mutate: signUpAdmissionProfessional,
  } = useMutation(API.auth.admissionProfessionalSignUp, {
    // TODO: fix any type
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

      localStorage.setItem(localStorageKeys.ROLE, UserRole.ADMISSION_PROFESSIONAL);

      dispatch(setRole(UserRole.ADMISSION_PROFESSIONAL));
      axios.defaults.headers.common.Authorization = `Bearer ${user.accessToken}`;
      showToast('Login successful!');
      router.push('/admission-professional/dashboard');
    },
    onError() {
      showToast('Unable to signup, please try again!');
    },
  });

  const formik = useFormik({
    initialValues: { ...initialValues },
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      signUpAdmissionProfessional({
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
        <title>Admission Professional Sign Up</title>
      </Head>

      <div className="hidden lg:block bg-[url('/assets/login-background.png')] w-1/2 h-screen bg-cover">
        <div className="h-screen w-full bg-mainBlue opacity-[85%] flex flex-col pt-[40%] items-center">
          <Image src="/assets/logo.png" height={70} width={149} alt="Logo" />
          <p className="mt-10 text-2xl text-center font-montserrat font-light text-white">
            Secure your child&apos;s future with
            <br /> a few clicks and taps.
          </p>
        </div>
      </div>

      <div className="flex-grow px-6 lg:px-0">
        <div className="max-w-md mx-auto mt-[30%]">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <Typography variation="title0" className="text-center md:text-left">
                Admission Professional Login
              </Typography>

              <FormikTextInput
                name="email"
                disabled={typeof router?.query?.email === 'string'}
                className="mt-8"
                label="Your email"
                placeholder="Enter your email"
              />

              <FormikTextInput
                name="password"
                className="mt-8"
                type="password"
                label="Create a password"
                placeholder="Enter your password"
              />

              <FormikTextInput
                className="mt-8"
                type="password"
                name="confirmPassword"
                label="Confirm your password"
                placeholder="Enter your password"
              />

              <ErrorMessage error={errorAdmissionProfessional} />

              <Button
                type="submit"
                loading={loadingAdmissionProfessional}
                className="mt-9 rounded-[34px] w-full">
                Sign Up
              </Button>
              <div className="flex justify-center">
                <Link
                  href="/admission-professional/login"
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

export default SignUpPage;
