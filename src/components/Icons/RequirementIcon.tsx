import React from 'react';

const RequirementIcon = () => {
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
          d="M15.3 10.077L18.671 6.7l-.546-.546L15.3 8.979l-1.425-1.406-.546.552 1.971 1.952zM4 19.5v-1h11v1H4zm12.003-7c-1.244 0-2.306-.438-3.185-1.315S11.5 9.247 11.5 8.003s.438-2.306 1.315-3.185S14.753 3.5 15.997 3.5s2.306.438 3.185 1.315S20.5 6.753 20.5 7.997s-.439 2.306-1.315 3.185c-.877.879-1.938 1.318-3.182 1.318zM4 11.5v-1h5.377a4.55 4.55 0 00.488 1H4zm0 4v-1h9.265c.268.118.548.22.84.309.293.088.591.152.895.193v.498H4z"
          fill="#161616"
        />
      </g>
    </svg>
  );
};

export default RequirementIcon;
