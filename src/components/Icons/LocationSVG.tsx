import React from 'react';

const LocationSVG = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}>
        <path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M12 11.5a1.45 1.45 0 001.066-.434A1.45 1.45 0 0013.5 10a1.45 1.45 0 00-.434-1.066A1.45 1.45 0 0012 8.5a1.45 1.45 0 00-1.066.434A1.45 1.45 0 0010.5 10c0 .422.145.777.434 1.066.289.29.644.434 1.066.434zm0 10.115c-2.53-2.244-4.412-4.327-5.647-6.247C5.118 13.448 4.5 11.726 4.5 10.2c0-2.346.756-4.216 2.268-5.61C8.28 3.197 10.024 2.5 12 2.5c1.976 0 3.72.697 5.232 2.09C18.744 5.984 19.5 7.854 19.5 10.2c0 1.526-.618 3.248-1.853 5.168-1.235 1.92-3.117 4.002-5.647 6.247z"
          fill="#161616"
        />
      </g>
    </svg>
  );
};

export default LocationSVG;
