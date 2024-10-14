import React, { useState } from 'react';

import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikSelect from '@components/Formik/FormikSelect/FormikSelect';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { familyInCollegeOptions, familyOptions } from '@core/data/dropdownOptions';
import { states } from '@core/data/states';
import {
  nextInternalStep,
  nextStep,
  previousInternalStep,
  previousStep,
  refetchFamilyProfile,
} from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import { familyOnboardingValidationSchema } from '@core/validation/family';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import OnboardingFooter from '@modules/Family/OnboardingFooter/OnboardingFooter';
import { useMutation } from '@tanstack/react-query';
import { OnBoardingFields } from '@typings/onboarding';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';

interface HouseholdProps {}

const Household: React.FC<HouseholdProps> = (props) => {
  const {} = props;

  const dispatch = useAppDispatch();
  const formik = useFormikContext<OnBoardingFields>();
  const householdStep = useAppSelector((state) => state.auth.onboarding.householdStep);
  const [completedSteps, setCompletedSteps] = useState(householdStep);
  const [currentStepIndex, setCurrentStepIndex] = useState(householdStep);

  const {
    isLoading,
    error,
    mutate: updateProfile,
  } = useMutation(API.family.auth.updateProfile, {
    onSuccess() {
      dispatch(refetchFamilyProfile());
      dispatch(nextStep());
      showToast('Household information saved successfully');
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  const steps = [
    {
      fields: ['state'],
      component: (
        <div key="state" className="pb-32">
          <FormikSelect
            isSearchable
            name="state"
            label="State"
            options={states}
            className="mt-12"
            placeholder="Select State"
          />
        </div>
      ),
    },
    {
      fields: ['familyMembersCount', 'familyMembersInCollege'],
      component: (
        <div className="relative flex flex-col justify-between pb-32">
          <FormikSelect
            placeholder="0"
            className="mt-12"
            key="noOfFamilyMembers"
            options={familyOptions}
            name="familyMembersCount"
            label="Number of people in household"
          />

          <FormikSelect
            className="mt-4"
            placeholder="0"
            key="familyMembersInCollege"
            name="familyMembersInCollege"
            options={familyInCollegeOptions}
            label="Number of people from household in college"
            onSelect={() => setCompletedSteps(totalSteps)}
          />
        </div>
      ),
    },
  ];

  const totalSteps = steps.length;

  const handlePrevious = () => {
    if (currentStepIndex === 0) {
      dispatch(previousStep());
    } else {
      setCompletedSteps(completedSteps - 1);
    }
    dispatch(previousInternalStep('householdStep'));
    setCurrentStepIndex((prev) => prev - 1);
  };

  const handleNext = async () => {
    const fields = steps[currentStepIndex].fields;
    const validationObject = {};
    const valuesObject = {};
    const touchedFields = {};
    fields.forEach((field) => {
      validationObject[field] = familyOnboardingValidationSchema[field];
      valuesObject[field] = formik.values[field];
      touchedFields[field] = true;
    });
    try {
      await Yup.object(validationObject).validate(valuesObject);

      if (currentStepIndex === totalSteps - 1) {
        updateProfile({
          state: formik?.values?.state || undefined,
          familyMembersCount: Number(formik.values.familyMembersCount),
          familyMembersInCollege: Number(formik.values.familyMembersInCollege),
        });
      } else {
        dispatch(nextInternalStep('householdStep'));
        setCurrentStepIndex(currentStepIndex + 1);
        setCompletedSteps(currentStepIndex + 1);
      }
    } catch (error) {
      formik.setTouched(touchedFields);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <OnboardingContainer>
        <button className="text-mainBlue underline md:hidden" onClick={handlePrevious}>
          {'<'} Go Back
        </button>
        <div className="flex justify-between items-end">
          <Typography variation="title0" className="font-bold text-darker mb-1">
            Household
          </Typography>
          <Typography variation="paragraph" className="text-dark">
            {completedSteps || 1}/{totalSteps}
          </Typography>
        </div>
        <ProgressBar className="mt-1" total={totalSteps} current={completedSteps} />
        {steps[currentStepIndex]?.component || steps[0]?.component}

        <ErrorMessage error={error} />
      </OnboardingContainer>

      <OnboardingFooter
        loading={isLoading}
        onNext={handleNext}
        nextModuleText="Parents"
        onPrevious={handlePrevious}
        showNextModuleText={currentStepIndex === totalSteps - 1}
      />
    </div>
  );
};

export default Household;
