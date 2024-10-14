const CollegeSearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
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
          d="M12 18.693L6 15.43v-4.846L3.077 9 12 4.154 20.923 9v6.385h-1V9.562L18 10.585v4.846l-6 3.262zm0-5.993L18.83 9 12 5.3 5.17 9 12 12.7zm0 4.852l5-2.7v-3.717l-5 2.712-5-2.712v3.717l5 2.7z"
          fill={props?.fill || '#666'}
        />
      </g>
    </svg>
  );
};

export default CollegeSearchIcon;
