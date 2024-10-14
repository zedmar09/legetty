import { cn } from '@utils/style';
import React, { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { className, children } = props;

  return <div className={cn('max-w-7xl mx-auto h-full', className)}>{children}</div>;
};

export default Container;
