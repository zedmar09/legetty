import React from 'react';

function EditIcon({ fill = '#0068F8' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <mask
        id="mask0_350_36517"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_350_36517)">
        <path
          fill={fill}
          d="M5.308 19H6.38l9.894-9.894-1.073-1.073-9.894 9.894V19zM18.415 8.386l-2.5-2.488 1.208-1.208a.996.996 0 01.73-.305c.282 0 .526.101.73.305l1.034 1.035c.204.204.308.445.312.724a.97.97 0 01-.3.724l-1.214 1.213zm-.719.725L6.808 20h-2.5v-2.5L15.196 6.61l2.5 2.5z"></path>
      </g>
    </svg>
  );
}

export default EditIcon;
