import DashboardIcon from '@components/Icons/DashboardIcon';
import HatIcon from '@components/Icons/HatIcon';
import { UserRole } from '@core/redux/reducers/authSlice';
import { useAppSelector } from '@core/redux/store';
import Link from 'next/link';
import React from 'react';

interface LandingHeaderProps {}

const primaryLinks = [
  {
    id: '1',
    name: 'Home',
    link: '/',
  },
  {
    id: '2',
    name: 'About',
    link: 'https://legetty.com/about-us/',
  },
  {
    id: '3',
    name: 'Contact',
    link: 'https://meetings.hubspot.com/lancemorgan/college-cost-secrets',
  },
];

const secondaryLinks = [
  {
    id: '1',
    name: 'Login',
    link: '/family/login',
  },
  {
    id: '2',
    icon: <HatIcon />,
    name: 'Sign Up',
    link: '/family/signup',
  },
];

const LandingHeader: React.FC<LandingHeaderProps> = (props) => {
  const {} = props;
  const userRoute = useAppSelector((state) => {
    const role = state?.auth?.role;
    if (role === UserRole?.ADMIN) {
      return 'admin/dashboard';
    } else if (role === UserRole?.FAMILY) {
      return '/family/federal-sai';
    } else if (role === UserRole?.ADMISSION_PROFESSIONAL) {
      return 'admission-professional/dashboard';
    } else if (role === UserRole?.FINANCIAL_AGENT) {
      return 'agent/dashboard';
    }
    return null;
  });

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-mainBlue text-white">
      <div
        className={`fixed md:hidden inset-0 min-h-[80vh] p-4 bg-mainBlue transition-transform duration-500 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } `}>
        <img alt="Logo" src="/assets/logo.svg" className="h-10 w-auto py-2 mr-14" />
        <button
          type="button"
          className="absolute right-4 top-4 text-white z-10"
          onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
            id="IconChangeColor">
            {' '}
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              id="mainIconPathAttribute"></path>{' '}
          </svg>
        </button>

        <ul className="relative flex text-lg flex-col h-full space-y-6 w-full py-12 px-2 capitalize text-secondary-dark font-medium">
          {[...primaryLinks, ...secondaryLinks].map((item) => (
            <li
              onClick={toggleMenu}
              key={item.name}
              className="flex space-x-4 cursor-pointer items-center">
              <Link href={item?.link}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-7xl mx-auto py-6 md:py-8 px-6">
        <div className="md:hidden flex justify-between items-center">
          <img alt="Logo" src="/assets/logo.svg" className="h-10 w-auto py-2 mr-14" />

          <div onClick={toggleMenu} className="inline-block xl:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <mask
                id="mask0_33_293"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_33_293)">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>

        <div className="items-center hidden md:flex">
          <img alt="Logo" src="/assets/logo.svg" className="h-10 w-auto py-2 mr-14" />

          <Link href="/" className="px-2 mr-1">
            Home
          </Link>

          <Link href="https://legetty.com/about-us/" className="px-2 mr-1">
            About
          </Link>

          <Link
            href="https://meetings.hubspot.com/lancemorgan/college-cost-secrets"
            className="px-2 mr-auto">
            Contact
          </Link>
          {userRoute ? (
            <Link href={userRoute} className="px-2 flex">
              <DashboardIcon />
              <p className="ml-1">Dashboard</p>
            </Link>
          ) : (
            <>
              <Link href="/family/login" className="px-2">
                Login
              </Link>

              <Link href="/family/signup" className="px-2 flex">
                <HatIcon />
                <p className="ml-1">Sign Up</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
