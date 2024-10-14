import React from 'react';

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#1C1B1F"
      viewBox="0 0 24 24"
      {...props}>
      <mask
        id="mask0_498_52284"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_498_52284)">
        <path
          fill="current"
          d="M6 19.5V5.615c0-.46.154-.844.463-1.152A1.565 1.565 0 017.615 4h8.77c.46 0 .844.154 1.152.463.309.308.463.692.463 1.152V19.5l-6-2.577L6 19.5zm1-1.55l5-2.15 5 2.15V5.615a.588.588 0 00-.192-.423.588.588 0 00-.423-.192h-8.77a.588.588 0 00-.423.192.588.588 0 00-.192.423V17.95z"></path>
      </g>
    </svg>
  );
}

export default BookmarkIcon;
