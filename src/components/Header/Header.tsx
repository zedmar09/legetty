import {
  adminHeaderRoutes,
  adminUserDropdownRoutes,
  admissionProfessionalUserDropdownRoutes,
  agentUserDropdownRoutes,
  familyHeaderRoutes,
} from '@core/config/header';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { auth } from '@core/lib/firebase';
import { UserRole, logout } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { getImageUrl } from '@utils/common';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useMemo, useState } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { cn } from '../../utils/style';
import ChevronDownIcon from '../Icons/ChevronDown';
import Typography from '../Typography/Typography';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const userRoute = useAppSelector((state) => {
    const role = state?.auth?.role;
    if (role === UserRole?.ADMIN) {
      if (router.pathname === '/admin/agents') {
        return '/admin/agents/add';
      } else if (router.pathname === '/admin/admission-professionals') {
        return '/admin/admission-professionals/add';
      }
    }
    return null;
  });

  const state = useAppSelector((state) => state);

  const user = useMemo(() => {
    const role = state?.auth?.role;
    if (role === UserRole.ADMIN) {
      return {
        role: state.auth.role,
        name: state?.auth?.authName,
      };
    } else if (role === UserRole.FAMILY) {
      return {
        role: state.auth.role,
        name: state?.auth?.family?.name,
      };
    } else if (role === UserRole.ADMISSION_PROFESSIONAL) {
      return {
        role: state.auth.role,
        name: state?.professional?.professional?.name,
      };
    } else if (role === UserRole.FINANCIAL_AGENT) {
      return {
        role: state.auth.role,
        name: state?.agent?.agent?.name,
      };
    }
    return {
      role: null,
      name: null,
    };
  }, [state]);

  const routes = useMemo(() => {
    if (user?.role === UserRole.ADMIN) {
      return adminHeaderRoutes;
    } else if (user?.role === UserRole.FAMILY) {
      return familyHeaderRoutes;
    }
    return [];
  }, [user?.role]);

  const userDropdownRoutes = useMemo(() => {
    if (user?.role === UserRole.ADMISSION_PROFESSIONAL) {
      return admissionProfessionalUserDropdownRoutes;
    } else if (user?.role === UserRole.ADMIN) {
      return adminUserDropdownRoutes;
    } else if (user?.role === UserRole.FINANCIAL_AGENT) {
      return agentUserDropdownRoutes;
    }
    return [];
  }, [user?.role]);

  router.events?.on('routeChangeComplete', () => {
    setOpen(false);
  });

  const handleLogout = async () => {
    await auth.signOut();
    localStorage.removeItem(localStorageKeys.FIREBASE_TOKENS);
    localStorage.removeItem(localStorageKeys.ROLE);
    localStorage.removeItem(localStorageKeys.ONBOARDING);
    dispatch(logout());
    router.push('/');
  };

  const disableModalVisible = () => {
    showToast('Please complete onBoarding first.');
  };

  return (
    <div className="fixed top-0 w-full z-10 my-first-step ">
      <BurgerMenu
        width="100%"
        isOpen={open}
        className="z-[99999]"
        burgerBarClassName="hidden"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}>
        {routes.map((page) => {
          const isActive = router.pathname.startsWith(page.to);
          return (
            <>
              {page?.type === 'dropdown' && router.pathname !== '/family/onboarding' ? (
                <Disclosure key={page.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={
                          cn(!isActive && 'opacity-60', 'py-3 pb-4 px-4 items-center') + 'relative'
                        }
                        style={{ display: 'flex' }}>
                        {page.icon}
                        <Typography
                          variation="title2"
                          className="text-ellipsis text-lightest4 ml-2">
                          {page.name}
                        </Typography>
                        <div
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}>
                          <ChevronDownIcon />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-8">
                        {page?.options &&
                          page?.options.map((option) => (
                            <Link
                              key={option.name}
                              href={option.href}
                              className={cn(
                                !isActive && 'opacity-60',
                                'py-3 px-4 items-center border-b border-dark'
                              )}
                              style={{ display: 'flex' }}>
                              <option.icon fill="#ffffff" className="mr-2" />
                              <Typography
                                variation="title2"
                                className="text-ellipsis text-lightest4 ml-2">
                                {option.name}
                              </Typography>
                            </Link>
                          ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ) : router.pathname === '/family/onboarding' ? (
                <button
                  key={page.id}
                  onClick={disableModalVisible}
                  className={cn(!isActive && 'opacity-60', 'py-3 px-4 items-center mb-2')}
                  style={{ display: 'flex' }}>
                  {page.icon}
                  <Typography variation="title2" className="text-ellipsis text-lightest4 ml-2">
                    {page.name}
                  </Typography>
                </button>
              ) : (
                <Link
                  key={page.id}
                  href={page.to}
                  className={cn(!isActive && 'opacity-60', 'py-3 px-4 items-center mb-2')}
                  style={{ display: 'flex' }}>
                  {page.icon}
                  <Typography variation="title2" className="text-ellipsis text-lightest4 ml-2">
                    {page.name}
                  </Typography>
                </Link>
              )}
            </>
          );
        })}
        {userDropdownRoutes?.map((page) => {
          const isActive = router.pathname.startsWith(page.to);
          return (
            <Link
              key={page.id}
              href={page.to}
              className={cn(!isActive && 'opacity-60', 'py-3 px-4 items-center mb-2')}
              style={{ display: 'flex' }}>
              {page.icon}
              <Typography variation="title2" className="text-ellipsis text-lightest4 ml-2">
                {page.name}
              </Typography>
            </Link>
          );
        })}
        <button className="mt-8 px-4" onClick={handleLogout}>
          Logout
        </button>
      </BurgerMenu>

      <div className="bg-mainBlue px-8 sm:px-10 py-2 lg:py-0 flex items-center justify-between">
        <div className="flex items-center">
          <div className="lg:hidden mr-4 lg:mr-0" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Link href="/">
            <img alt="Logo" src={'/assets/logo.svg'} className="h-10 w-auto py-2" />
          </Link>
        </div>
        {userRoute && (
          <Link href={userRoute}>
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Link>
        )}

        <div className="hidden lg:flex lg:items-center space-x-4 ml-8 xl:ml-24 mr-auto">
          {routes.map((page) => {
            if (page?.type === 'dropdown' && router.pathname !== '/family/onboarding') {
              const isActive = router.pathname.startsWith(page.to);
              return (
                <Menu key={page.id} as="div" className="hidden md:inline-block relative text-left">
                  <div>
                    <Menu.Button>
                      <div
                        className={cn(
                          !isActive
                            ? 'opacity-60 border-b-0 truncate'
                            : 'after:border-t-4 after:border-white after:border-opacity-80 after:rounded-t-[4px] after:absolute after:w-full after:top-full',
                          'relative mb-[3px] flex items-center justify-center h-full px-4'
                        )}>
                        <div
                          className={cn(
                            'border-b-4 py-6 border-transparent',
                            isActive && 'border-[#ffffff]'
                          )}>
                          <div id={page.id} className="flex items-center justify-center">
                            <span className="">{page.icon}</span>
                            <div>
                              <Typography
                                variation="title3"
                                className="text-ellipsis text-lightest4 ml-2 pr-2">
                                {page.name}
                              </Typography>
                            </div>
                            <ChevronDownIcon />
                          </div>
                        </div>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {page?.options?.map((option) => (
                        <div key={option.name} className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={option.href}
                                className={`${
                                  active && 'bg-gray-100'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm text-dark`}>
                                <option.icon fill="#161616" className="mr-2" />
                                <span>{option.name}</span>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              );
            } else {
              const isActive = router.pathname.startsWith(page.to);
              return (
                <>
                  {router.pathname === '/family/onboarding' ? (
                    <button
                      onClick={disableModalVisible}
                      key={page.id}
                      className={cn(
                        !isActive
                          ? 'opacity-60 border-b-0 truncate'
                          : 'after:border-t-4 after:border-white after:border-opacity-80 after:rounded-t-[4px] after:absolute after:w-full after:top-full',
                        'relative mb-[3px] flex items-center justify-center h-full px-4'
                      )}>
                      <div
                        className={cn(
                          'border-b-4 py-6 border-transparent',
                          isActive && 'border-[#ffffff]'
                        )}>
                        <div id={page.id} className={cn(`flex items-center justify-center`)}>
                          <span>{page.icon}</span>
                          <Typography
                            variation="title3"
                            className="text-ellipsis text-lightest4 ml-2 pr-2 py-1">
                            {page.name}
                          </Typography>
                        </div>
                      </div>
                    </button>
                  ) : (
                    <Link
                      key={page.id}
                      href={page.to}
                      className={cn(
                        !isActive
                          ? 'opacity-60 border-b-0 truncate'
                          : 'after:border-t-4 after:border-white after:border-opacity-80 after:rounded-t-[4px] after:absolute after:w-full after:top-full',
                        'relative mb-[3px] flex items-center justify-center h-full px-4'
                      )}>
                      <div
                        className={cn(
                          'border-b-4 py-6 border-transparent',
                          isActive && 'border-[#ffffff]'
                        )}>
                        <div id={page.id} className={cn(`flex items-center justify-center`)}>
                          <span>{page.icon}</span>
                          <Typography
                            variation="title3"
                            className="text-ellipsis text-lightest4 ml-2 pr-2">
                            {page.name}
                          </Typography>
                        </div>
                      </div>
                    </Link>
                  )}
                </>
              );
            }
          })}
        </div>
        {user && (
          <div className="hidden lg:flex items-center cursor-pointer">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center p-4">
                {user?.name && (
                  <Image
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                    src={getImageUrl(user?.name)}
                  />
                )}
                <Typography variation="title3" className="text-white lg:mx-2">
                  {user?.name}
                </Typography>
                <ChevronDownIcon />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {userDropdownRoutes?.map((route) => (
                      <Menu.Item key={route.id}>
                        {({ active }) => (
                          <Link
                            href={route.to}
                            className={cn(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}>
                            {route?.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={cn(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}>
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
