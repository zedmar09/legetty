import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import CheckIcon from '@components/Icons/CheckIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { forgotPasswordSchema } from '@core/validation/auth';
import Banner from '@modules/Auth/Banner/Banner';
import 'firebase/auth';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const initialValues = {
  email: '',
};

const ForgotPasswordPage: NextPage = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const handleResetPassword = async (email) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email as string)
      .then(() => {
        setIsMailSent(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        showToast('Unable to send mail');
        setIsLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      handleResetPassword(values.email);
    },
  });

  return (
    <div className="h-screen flex">
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Banner />

      <div className="px-6 lg:px-0 flex justify-center w-full mt-[15vh] lg:w-1/2">
        <div className="lg:min-w-[430px] mx-auto">
          <Typography className="text-title1 sm:text-title0">Financial Agent</Typography>
          <Typography className="text-title2 text-left mt-4">Password Recovery</Typography>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              {isMailSent ? (
                <div className={`py-9 flex border-b border-lightest`}>
                  <CheckIcon />
                  <Typography variation="description1" className="text-positiveAction ml-2">
                    We&rsquo;ve sent instructions to {formik.values.email}
                  </Typography>
                </div>
              ) : (
                <>
                  <FormikTextInput
                    name="email"
                    className="mt-8"
                    label="Your email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage error={error} />
                  <Button
                    type="submit"
                    className="mt-9 w-full"
                    variation="landing"
                    loading={isLoading}>
                    Send Instructions
                  </Button>
                </>
              )}
              <div className="flex flex-col items-center">
                <Link
                  href="/agent/signup"
                  className="mt-6 flex font-bold text-description1 text-actionGreen hover:underline space-x-1">
                  <span className="text-darker">Don&rsquo;t Have an account ?</span>{' '}
                  <Typography variation="description1">Signup</Typography>
                </Link>

                <Link
                  href="/agent/login"
                  className="mt-6 flex font-bold text-description1 text-actionGreen hover:underline space-x-1">
                  <span className="text-darker">Already have an account ?</span>{' '}
                  <Typography variation="description1">Sign In</Typography>
                </Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
