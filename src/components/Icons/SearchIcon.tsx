import React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#0068F8"
      viewBox="0 0 24 24"
      {...props}>
      <mask
        id="mask0_744_87575"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_744_87575)">
        <path
          fill="current"
          d="M19.485 20.154l-6.262-6.262a5.5 5.5 0 01-1.725.989c-.65.233-1.303.35-1.96.35-1.601 0-2.957-.555-4.066-1.664-1.11-1.108-1.664-2.463-1.664-4.064 0-1.6.554-2.957 1.663-4.068C6.58 4.325 7.934 3.77 9.535 3.77s2.957.555 4.068 1.664c1.11 1.11 1.666 2.465 1.666 4.067 0 .695-.123 1.367-.37 2.017a5.48 5.48 0 01-.968 1.667l6.261 6.262-.707.708zM9.538 14.23c1.327 0 2.447-.457 3.361-1.37.913-.914 1.37-2.034 1.37-3.361 0-1.327-.457-2.447-1.37-3.36-.913-.914-2.034-1.371-3.36-1.371-1.328 0-2.448.457-3.361 1.37-.914.914-1.37 2.034-1.37 3.36 0 1.328.456 2.448 1.37 3.361.913.914 2.033 1.37 3.36 1.37z"></path>
      </g>
    </svg>
  );
}

export default SearchIcon;
