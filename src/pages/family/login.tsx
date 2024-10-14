import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import Typography from '@components/Typography/Typography';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { auth } from '@core/lib/firebase';
import { UserRole, fetchFamilyProfile, setRole } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import API from '@core/services';
import { loginSchema } from '@core/validation/auth';
import Banner from '@modules/Auth/Banner/Banner';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const initialValues = {
  email: '',
  password: '',
};

const FamilyLoginPage: NextPage = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    isLoading,
    error,
    mutate: login,
  } = useMutation(API.auth.login, {
    async onSuccess({ user }: any) {
      const tokenResult = await auth.currentUser.getIdTokenResult();
      if (tokenResult.claims.role === 'family') {
        localStorage.setItem(
          localStorageKeys.FIREBASE_TOKENS,
          JSON.stringify({
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
          })
        );
        localStorage.setItem(localStorageKeys.ROLE, UserRole.FAMILY);
        dispatch(setRole(UserRole.FAMILY));
        axios.defaults.headers.common.Authorization = `Bearer ${user.accessToken}`;
        showToast('Login successful!');
        const profile = await dispatch(fetchFamilyProfile());
        // @ts-ignore
        if (profile?.payload?.invitationStatus === 'invited') {
          router.replace('/family/onboarding');
        } else {
          router.replace('/family/college/search');
        }

        localStorage.setItem(localStorageKeys.ONBOARDING, 'yes');
      } else {
        showToast('Unable to login, please try again!');
      }
    },
    onError() {
      showToast('Unable to login, please try again!');
    },
  });

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Head>
        <title>Login</title>
      </Head>

      <Banner />

      <div className="px-6 lg:px-0 flex justify-center w-full items-center py-8 md:w-1/2">
        <div className="lg:max-w-[430px] w-full mx-auto">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <Typography className="text-center text-title1 xs:text-title0  md:text-left">
                Sign In
              </Typography>

              <FormikTextInput
                name="email"
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

              <ErrorMessage error={error} />
              <Button type="submit" className="mt-9 w-full" variation="landing" loading={isLoading}>
                Sign In
              </Button>

              <div className="flex flex-col items-center">
                <Link
                  href="/family/signup"
                  className="mt-6 flex font-bold text-description1 text-actionGreen hover:underline space-x-1">
                  <span className="text-darker">Don&rsquo;t Have an account ?</span>{' '}
                  <Typography variation="description1">Signup</Typography>
                </Link>

                <Link
                  href="/family/forgot-password"
                  className="text-actionGreen block mt-6 text-description1 font-bold hover:underline">
                  Forgot Your Password?
                </Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default FamilyLoginPage;
