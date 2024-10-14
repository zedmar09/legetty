interface Props {
  progress: number;
  radius?: number;
  stroke?: string;
}

const CircularProgress = ({ progress, radius = 42, stroke }: Props) => {
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#DDDDDD"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={stroke || '#0068F8'}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(90 ${radius} ${radius})`}
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-darker font-bold text-title3">
        {progress ? `${progress}%` : 'N/A'}
      </text>
    </svg>
  );
};

export default CircularProgress;
