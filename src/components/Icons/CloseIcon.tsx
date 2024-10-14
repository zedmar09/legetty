import React from 'react';

function CloseIcon(props: { fill?: string; height?: string; width?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || '24'}
      height={props?.height || '24'}
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke={props?.fill || '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.75 5.25l-13.5 13.5M18.75 18.75L5.25 5.25"></path>
    </svg>
  );
}

export default CloseIcon;
