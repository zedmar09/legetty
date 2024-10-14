import React from 'react';

const LaptopCheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { fill = '#666' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <mask
        id="mask0_739_73197"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_739_73197)">
        <path
          fill={fill}
          d="M10.925 13.8l4.963-4.939-.713-.713-4.25 4.25L8.8 10.273l-.708.708 2.833 2.819zM1.77 19.462v-1h20.462v1H1.769zm2.846-2c-.46 0-.844-.155-1.152-.463A1.565 1.565 0 013 15.846v-9.77c0-.46.154-.844.463-1.152a1.565 1.565 0 011.152-.463h14.77c.46 0 .844.155 1.153.463.308.308.462.693.462 1.153v9.77c0 .46-.154.844-.462 1.152a1.565 1.565 0 01-1.153.463H4.615zm0-1h14.77a.588.588 0 00.423-.193.588.588 0 00.192-.423v-9.77a.588.588 0 00-.192-.422.588.588 0 00-.423-.193H4.615a.588.588 0 00-.423.193.588.588 0 00-.192.423v9.77c0 .153.064.294.192.422.129.128.27.192.423.192z"></path>
      </g>
    </svg>
  );
};

export default LaptopCheckIcon;
