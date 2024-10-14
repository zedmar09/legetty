import React from 'react';

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 8.25c0-2.063 1.734-3.778 3.797-3.75a3.75 3.75 0 013.394 2.25H22.5l-3.028 3.028A11.99 11.99 0 017.5 21c-3 0-3.75-1.125-3.75-1.125s3-1.125 4.5-3.375c0 0-6-3-4.5-11.25 0 0 3.75 3.75 8.25 4.5v-1.5z"></path>
    </svg>
  );
}

export default TwitterIcon;
