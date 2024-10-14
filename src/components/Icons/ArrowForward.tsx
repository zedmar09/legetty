function ArrowForwardIcon(props?: { fill?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <mask id="mask0_855_4976" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_855_4976)">
        <path
          fill={props?.fill || '#fff'}
          d="M12 19.23l-.713-.707L17.31 12.5H4.77v-1h12.54l-6.023-6.023.713-.708L19.23 12 12 19.23z"></path>
      </g>
    </svg>
  );
}

export default ArrowForwardIcon;
