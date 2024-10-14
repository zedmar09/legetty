import { cn } from '@utils/style';
import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  total: number;
  current: number;
  className?: string;
  background?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { total, current, className, background } = props;

  const [width, setWidth] = useState((current / total) * 100 + '%');

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth((current / total) * 100 + '%');
    });
  }, [current, total]);

  return (
    <div className={cn('progressVisualFull bg-[#D9D9D9]', className)}>
      <div
        key={current}
        style={{ width, backgroundColor: background ? background : '#29CC6a' }}
        className={`progressVisualPart`}
      />
    </div>
  );
};

export default ProgressBar;
