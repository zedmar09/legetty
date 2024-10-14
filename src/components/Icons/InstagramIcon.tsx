import React from 'react';

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.125 3.375h-8.25a4.5 4.5 0 00-4.5 4.5v8.25a4.5 4.5 0 004.5 4.5h8.25a4.5 4.5 0 004.5-4.5v-8.25a4.5 4.5 0 00-4.5-4.5z"></path>
      <path fill="#fff" d="M16.875 8.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"></path>
    </svg>
  );
}

export default InstagramIcon;
