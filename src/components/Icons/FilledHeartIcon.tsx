import React from 'react';

function FilledHeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
    >
      <mask
        id="mask0_506_56734"
        style={{ maskType: 'alpha' }}
        width="16"
        height="17"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0.5H16V16.5H0z"></path>
      </mask>
      <g mask="url(#mask0_506_56734)">
        <path
          fill="red"
          d="M8 14.5l-.967-.867a75.395 75.395 0 01-2.783-2.616c-.733-.734-1.317-1.392-1.75-1.975-.433-.584-.736-1.12-.908-1.609a4.483 4.483 0 01-.259-1.5c0-1.044.35-1.916 1.05-2.616.7-.7 1.572-1.05 2.617-1.05.578 0 1.128.122 1.65.366.522.245.972.59 1.35 1.034a3.953 3.953 0 011.35-1.034A3.846 3.846 0 0111 2.267c1.044 0 1.917.35 2.617 1.05.7.7 1.05 1.572 1.05 2.616 0 .511-.086 1.011-.259 1.5-.172.49-.475 1.025-.908 1.609-.433.583-1.017 1.241-1.75 1.975a75.376 75.376 0 01-2.783 2.616L8 14.5z"
        ></path>
      </g>
    </svg>
  );
}

export default FilledHeartIcon;
