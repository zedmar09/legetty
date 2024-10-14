import Button from '@components/Button/Button';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import Banner from '@modules/Auth/Banner/Banner';
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

const PasswordRecoveryPage: NextPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: (values) => {
      showToast('Under development');
    },
  });
  useEffect(() => {
    formik.setFieldValue('email', router.query.email);
  }, [router.query.email]);

  return (
    <div className="h-screen w-screen flex">
      <Head>
        <title>Password Recovery</title>
      </Head>

      <Banner />

      <div className="px-6 lg:px-0 flex justify-center w-full mt-[15vh] lg:w-1/2">
        <div className="lg:min-w-[430px] mx-auto">
          <Typography className="text-title1 sm:text-title0">Admission Professionals</Typography>
          <Typography className="text-title2 text-left mt-4">Password Recovery</Typography>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <FormikTextInput
                name="email"
                type="email"
                className="mt-8"
                inputClassName="cursor-not-allowed"
                label="Your email"
                placeholder="Enter your email"
                disabled
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

              {/* <ErrorMessage error={error} /> */}

              <div className="flex flex-col items-center">
                <Button
                  type="submit"
                  variation="landing"
                  //   loading={isLoading}
                  className="mt-3 w-full rounded-full">
                  Sign up
                </Button>
                <Link
                  href="/agent/login"
                  className="mt-6 flex font-bold text-description1 text-mainBlue hover:underline space-x-1">
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

export default PasswordRecoveryPage;
