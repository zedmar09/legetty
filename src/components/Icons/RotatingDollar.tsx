import React from 'react';

function RotatingDollar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#8EB84F"
      viewBox="0 0 24 24"
      {...props}>
      <mask
        id="mask0_422_30939"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_422_30939)">
        <path
          fill="current"
          d="M12 22c-2.033 0-3.856-.54-5.467-1.621-1.612-1.08-2.822-2.535-3.63-4.362v3.29h-1v-5h5v1H3.699a8.561 8.561 0 003.25 4.132A8.745 8.745 0 0012 21a8.847 8.847 0 003.378-.645 8.93 8.93 0 002.782-1.781 9.081 9.081 0 001.954-2.696c.501-1.04.79-2.167.867-3.378h1a9.641 9.641 0 01-.92 3.717 10.304 10.304 0 01-2.161 3.02 9.91 9.91 0 01-3.115 2.026A9.783 9.783 0 0112 22zm-.515-3.385v-1.223c-.681-.157-1.261-.428-1.74-.81-.479-.383-.86-.917-1.145-1.601l.88-.381c.278.62.648 1.097 1.111 1.432.464.335.983.503 1.559.503.588 0 1.14-.155 1.653-.465.513-.31.77-.816.77-1.52 0-.56-.185-1-.555-1.32-.37-.319-1.092-.676-2.168-1.072-1.073-.389-1.836-.799-2.288-1.231-.451-.432-.677-1.008-.677-1.727 0-.606.227-1.166.683-1.68.456-.513 1.112-.834 1.967-.962V5.385h.98v1.173a2.823 2.823 0 011.465.542 3.19 3.19 0 011.031 1.208l-.869.342a2.757 2.757 0 00-.823-.886c-.338-.232-.761-.349-1.269-.349-.66 0-1.19.17-1.588.51-.398.34-.597.765-.597 1.275 0 .51.153.903.46 1.179.306.276 1.01.606 2.113.99 1.2.434 2.013.897 2.439 1.39.425.494.638 1.091.638 1.791 0 .47-.093.883-.279 1.236a2.713 2.713 0 01-.72.88 3.368 3.368 0 01-.981.539 4.44 4.44 0 01-1.07.237v1.173h-.98zM2.019 11.5a10.127 10.127 0 013.177-6.833A9.846 9.846 0 018.302 2.7 9.877 9.877 0 0112 2c1.995 0 3.817.544 5.467 1.63 1.65 1.088 2.86 2.564 3.63 4.43V4.692h1v5h-5v-1h3.205C19.694 7.031 18.627 5.667 17.1 4.6A8.701 8.701 0 0012 3a8.807 8.807 0 00-3.291.626 9.097 9.097 0 00-2.793 1.742 9.083 9.083 0 00-2.002 2.677c-.52 1.04-.818 2.192-.895 3.455h-1z"></path>
      </g>
    </svg>
  );
}

export default RotatingDollar;
