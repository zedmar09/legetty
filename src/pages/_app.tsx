import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextNProgress from 'nextjs-progressbar';

import 'rc-dropdown/assets/index.css';
import 'react-modern-drawer/dist/index.css';
import '../core/styles/root.css';

import CCSLoader from '@components/CCSLoader/CCSLoader';
import { localStorageKeys } from '@core/config/keys';
import { UserRole, fetchFamilyProfile, setRole } from '@core/redux/reducers/authSlice';
import { store, useAppDispatch, useAppSelector } from '@core/redux/store';
import LandingHeader from '@modules/Landing/LandingHeader/LandingHeader';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FirebaseTokens } from '@typings/common';
import { cn } from '@utils/style';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Header from '../components/Header/Header';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: remove this on prod
      refetchOnWindowFocus: false,
    },
  },
});

const persistor = persistStore(store);

const loginRoutes = [
  '/admin/login',
  '/family/signup',
  '/family/login',
  '/family/forgot-password',
  '/family/password-recovery',
  '/signup',
  '/admission-professional/login',
  '/admission-professional/signup',
  '/admission-professional/forgot-password',
  '/agent/signup',
  '/agent/login',
  '/agent/forgot-password',
  '/agent/password-recovery',
];

const publicRoutes = ['/', '/privacy-policy', '/terms-of-service', ...loginRoutes];

interface AppProps {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isPublicRoute = publicRoutes.includes(router.pathname);
  const isLoginRoute = loginRoutes.includes(router.pathname);
  const fetchingProfile = useAppSelector((state) => state.auth.fetchingProfile);
  const family = useAppSelector((state) => state.auth.family);

  const [runTour, setRunTour] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const pathname = router.pathname;
        const userRole = localStorage.getItem(localStorageKeys.ROLE) as UserRole;
        const tokens = localStorage.getItem(
          localStorageKeys.FIREBASE_TOKENS
        ) as unknown as FirebaseTokens;
        if (tokens) {
          // Check for family routes
          if (userRole === UserRole.FAMILY) {
            if (family?.invitationStatus !== 'active') {
              await router.push('/family/onboarding');
            } else if (isLoginRoute || router.pathname === '/family/onboarding') {
              await router.push('/family/college/search');
            }

            dispatch(fetchFamilyProfile());
          } else if (userRole === UserRole.ADMIN) {
            if (isLoginRoute) {
              await router.push('/admin/dashboard');
            }
          } else if (userRole === UserRole.ADMISSION_PROFESSIONAL) {
            if (isLoginRoute) {
              await router.push('/admission-professional/dashboard');
            }
          } else if (userRole === UserRole.FINANCIAL_AGENT) {
            if (isLoginRoute) {
              await router.push('/agent/dashboard');
            }
          }
          dispatch(setRole(userRole));
        }
      } else if (!isPublicRoute) {
        await router.push('/');
      }

      setTimeout(() => setLoaded(true), 0);
    });
  }, []);

  if (!loaded || fetchingProfile) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <CCSLoader />
      </div>
    );
  }

  return (
    <>
      <NextNProgress color="#fff" />
      <Toaster position="bottom-right" />

      <div className="" onClick={() => setRunTour(true)}>
        {!isPublicRoute && <Header />}

        {isPublicRoute && !isLoginRoute && <LandingHeader />}
        <div className={cn('min-h-screen', !isPublicRoute && 'bg-white pt-[56px] lg:pt-[76px]')}>
          {loaded && <Component {...pageProps} />}
        </div>
      </div>
    </>
  );
}

const Root: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-257553657-1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-J1B48NB38Y');
      `}
      </Script>

      {/* Hot jar script */}
      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3748558,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
        }}
      />

      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App Component={Component} pageProps={pageProps} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
