function ChevronDownIcon(props: { fill?: string }) {
  const { fill = '#ffffff' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      stroke-width="2.25"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-chevron-down">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default ChevronDownIcon;
