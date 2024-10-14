import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import Typography from '@components/Typography/Typography';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { auth } from '@core/lib/firebase';
import { UserRole, setAuthName, setRole } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import API from '@core/services';
import { loginSchema } from '@core/validation/auth';
import Banner from '@modules/Auth/Banner/Banner';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage: NextPage = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    isLoading,
    error,
    mutate: login,
  } = useMutation(API.auth.login, {
    async onSuccess({ user }: any) {
      const tokenResult = await auth.currentUser.getIdTokenResult();
      if (tokenResult.claims.role === 'admin') {
        localStorage.setItem(
          localStorageKeys.FIREBASE_TOKENS,
          JSON.stringify({
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
          })
        );
        localStorage.setItem(localStorageKeys.ROLE, UserRole.ADMIN);

        dispatch(setRole(UserRole.ADMIN));
        dispatch(setAuthName(user.displayName));

        axios.defaults.headers.common.Authorization = `Bearer ${user.accessToken}`;
        showToast('Login successful!');
        router.replace('/admin/dashboard');
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
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Login</title>
      </Head>

      <Banner />

      <div className="px-6 lg:px-0 flex justify-center w-full items-center py-8 md:w-1/2">
        <div className="lg:max-w-[430px] w-full mx-auto">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <Typography variation="title0" className="text-center md:text-left">
                Admin Login
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

              {/* <Link href="/forgot-password" className="text-actionGreen block mt-10">
                I forgot my password
              </Link> */}

              {/* <Link href="/forgot-email" className="text-actionGreen block mt-5">
                I forgot my email
              </Link> */}

              <Button type="submit" className="mt-9 rounded-[34px] w-full" loading={isLoading}>
                Sign In
              </Button>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
