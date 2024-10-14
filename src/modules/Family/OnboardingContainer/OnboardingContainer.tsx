import React, { PropsWithChildren } from 'react';

interface OnboardingContainerProps extends PropsWithChildren {}

const OnboardingContainer: React.FC<OnboardingContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex-grow bg-white py-16 lg:py-16 w-full lg:w-[508px] lg:mx-auto px-6 lg:px-0 pt-[75px] pb-[250px]">
      {children}
    </div>
  );
};

export default OnboardingContainer;
