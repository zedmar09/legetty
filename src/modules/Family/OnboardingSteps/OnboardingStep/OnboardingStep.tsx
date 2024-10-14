import React from 'react';

import ArrowForwardIcon from '@components/Icons/ArrowForward';
import CheckboxIcon from '@components/Icons/Checkbox';
import CheckedIcon from '@components/Icons/CheckedIcon';
import EditIcon from '@components/Icons/EditIcon';
import Typography from '@components/Typography/Typography';
import { Step } from '@core/redux/reducers/authSlice';
import { useAppSelector } from '@core/redux/store';
import { familyOnboardingValidationSchema } from '@core/validation/family';
import { cn } from '@utils/style';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';

interface OnboardingStepProps {
  step: Step;
  isActive?: boolean;
  onClick?: () => void;
}

const OnboardingStep: React.FC<OnboardingStepProps> = (props) => {
  const { step, isActive, onClick } = props;
  const formik = useFormikContext();
  const onboarding = useAppSelector((state) => state.auth.onboarding);

  let icon: React.ReactNode = null;
  let textColor = null;
  let disabled = false;

  const validationObject = {};
  const valuesObject = {};
  step.requiredFields.forEach((field) => {
    validationObject[field] = familyOnboardingValidationSchema[field];
    valuesObject[field] = formik.values[field];
  });
  const isValid = Yup.object().shape(validationObject).isValidSync(valuesObject);

  if (isActive) {
    disabled = false;
    icon = <EditIcon />;
    textColor = 'text-mainBlue';
  } else if (isValid) {
    disabled = false;
    icon = <CheckedIcon />;
    textColor = 'text-darker';
  } else {
    disabled = true;
    icon = <CheckboxIcon />;
    textColor = 'text-lightest';
  }

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'px-4 py-3 flex items-center justify-between hover:bg-gray-200 cursor-pointer rounded',
        isActive && 'bg-mainBlue bg-opacity-20'
      )}>
      <div className="flex items-center space-x-6">
        {icon}
        <Typography variation="title3" className={cn('ml-4 font-normal', textColor)}>
          {step.title}
        </Typography>
      </div>
      {isActive && <ArrowForwardIcon fill="#2174BB" />}
    </div>
  );
};

export default OnboardingStep;
