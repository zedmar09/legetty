import React from 'react';

import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { setStep } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { useMediaQuery } from 'react-responsive';
import OnboardingStep from './OnboardingStep/OnboardingStep';

interface OnboardingStepsProps {
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OnboardingSteps: React.FC<OnboardingStepsProps> = (props) => {
  const { setMobileMenuOpen } = props;
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });
  const onboarding = useAppSelector((state) => state.auth.onboarding);

  return (
    <div className="bg-white fixed rounded-t-3xl lg:rounded-none h-full px-6 py-16 lg:bg-lightest4 border-r border-lightest3 min-w-[380px] lg:max-w-[380px] w-full">
      <Typography variation="description3" className="uppercase text-dark pl-4">
        onboarding
      </Typography>

      <div className="mt-5 flex flex-col space-y-2">
        {onboarding.steps.map((step, index) => {
          const handleClick = () => {
            if (onboarding.currentStepIndex === onboarding.steps.length - 1) return;
            dispatch(setStep(index));
            if (isMobile && setMobileMenuOpen) setMobileMenuOpen(false);
          };

          return (
            <OnboardingStep
              step={step}
              key={step.id}
              onClick={handleClick}
              isActive={onboarding.currentStepIndex === index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingSteps;
