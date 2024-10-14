const NotAllowedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = '16', height = '17' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#D9D9D9" strokeWidth="2"></circle>
      <path stroke="#D9D9D9" strokeWidth="2" d="M2.5 6.5L19.5 18.5"></path>
    </svg>
  );
};

export default NotAllowedIcon;
