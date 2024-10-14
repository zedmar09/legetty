import React from 'react';

function FlagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <mask
        id="mask0_379_27919"
        style={{ maskType: 'alpha' }}
        width="16"
        height="16"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H16V16H0z"></path>
      </mask>
      <g mask="url(#mask0_379_27919)">
        <path
          fill="#1C1B1F"
          d="M3.666 14.333V1.667h.667V3h9.18l-1.206 3 1.205 3h-9.18v5.333h-.666zM8.333 7a.966.966 0 00.71-.289.966.966 0 00.29-.71.966.966 0 00-.29-.712.966.966 0 00-.71-.289.966.966 0 00-.711.29.966.966 0 00-.29.71c0 .281.097.518.29.711.193.193.43.29.71.29zm-4 1.333h8.187L11.592 6l.928-2.333H4.333v4.666z"
        ></path>
      </g>
    </svg>
  );
}

export default FlagIcon;
