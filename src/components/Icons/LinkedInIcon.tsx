import React from 'react';

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.875 3.375H4.125a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75h15.75a.75.75 0 00.75-.75V4.125a.75.75 0 00-.75-.75zM11.25 10.5v6M8.25 10.5v6"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 13.125a2.625 2.625 0 015.25 0V16.5"></path>
      <path fill="#fff" d="M8.25 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"></path>
    </svg>
  );
}

export default LinkedInIcon;
