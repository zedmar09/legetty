import React from 'react';

function BankIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#9AC062"
      viewBox="0 0 24 24"
      {...props}>
      <mask
        id="mask0_422_30945"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_422_30945)">
        <path
          fill="current"
          d="M6.5 17V9h1v8h-1zm5 0V9h1v8h-1zm-7.962 3v-1h16.924v1H3.538zM16.5 17V9h1v8h-1zM3.538 7v-.846L12 2.115l8.462 4.039V7H3.538z"></path>
      </g>
    </svg>
  );
}

export default BankIcon;
