import React from 'react';

function DeleteIcon({ fill = '#0068F8' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <mask
        id="mask0_350_36514"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_350_36514)">
        <path
          fill={fill}
          d="M7.615 20c-.447 0-.828-.157-1.143-.472A1.557 1.557 0 016 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385c0 .46-.154.844-.462 1.152a1.565 1.565 0 01-1.153.463h-8.77zM17 6H7v12.385c0 .18.058.326.173.442a.599.599 0 00.442.173h8.77a.588.588 0 00.423-.192.588.588 0 00.192-.423V6zM9.808 17h1V8h-1v9zm3.384 0h1V8h-1v9z"></path>
      </g>
    </svg>
  );
}

export default DeleteIcon;
