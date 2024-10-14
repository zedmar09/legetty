import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import OnboardingFooter from '@modules/Family/OnboardingFooter/OnboardingFooter';
import { OnBoardingFields } from '@typings/onboarding';
import { useFormikContext } from 'formik';

import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikCurrencyInput from '@components/Formik/FormikCurrencyInput/FormikCurrencyInput';
import FormikRadioGroup, { RadioItem } from '@components/Formik/FormikRadioGroup/FormikRadioGroup';
import { showToast } from '@core/config/toast';
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
import { useMutation } from '@tanstack/react-query';
import { PrimaryResidence } from '@typings/model/family';

interface HouseholdFinanceProps {}

const YesNoRadioOptions: RadioItem[] = [
  {
    label: 'Yes',
    value: 'Yes',
  },
  {
    label: 'No',
    value: 'No',
  },
];

const HouseHoldFinance: React.FC<HouseholdFinanceProps> = (props) => {
  const {} = props;

  const dispatch = useAppDispatch();
  const formik = useFormikContext<OnBoardingFields>();
  const householdFinanceStep = useAppSelector(
    (state) => state.auth.onboarding.householdFinanceStep
  );
  const [completedSteps, setCompletedSteps] = useState(householdFinanceStep);
  const [currentStepIndex, setCurrentStepIndex] = useState(householdFinanceStep);
  // const [showHelp, setShowHelp] = useState(false);

  const {
    isLoading,
    error,
    mutate: updateProfile,
  } = useMutation(API.family.auth.updateProfile, {
    onSuccess() {
      dispatch(refetchFamilyProfile());
      dispatch(nextStep());
      showToast('Finance information saved successfully');
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  const steps = [
    {
      fields: ['primaryResidence', 'residenceEquity'],
      component: (
        <div key="primaryResidence">
          <FormikRadioGroup
            name="primaryResidence"
            className="mt-12"
            label="Do you own or rent your primary residence?"
            items={[
              {
                label: 'Own',
                value: 'Own',
              },
              {
                label: 'Rent',
                value: 'Rent',
              },
            ]}
          />

          {formik?.values.primaryResidence === PrimaryResidence.Own && (
            <div>
              <div className="relative w-full my-8">
                <FormikCurrencyInput
                  name="residenceEquity"
                  label="How much estimated equity do you have in your home?"
                />
                {/* {showHelp ? (
                  <div
                    onClick={() => setShowHelp(false)}
                    className="absolute right-4 top-0 cursor-pointer flex items-center mt-[21px] h-[calc(100%-21px)]">
                    <CloseHelpIcon />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowHelp(true)}
                    className="absolute right-4 top-0 cursor-pointer flex items-center mt-[21px] h-[calc(100%-21px)]">
                    <HelpIcon />
                  </div>
                )} */}
              </div>
              {/* {showHelp && (
                <HelpDiscloser
                  option={[
                    {
                      title: '401(k) Plans',
                      description:
                        'Employer-sponsored retirement plan that allows employees to contribute a portion of their salary to a tax-advantaged investment account. ',
                    },
                    {
                      title: 'Traditional Individual Retirement Accounts (IRAs)',
                      description:
                        'Employer-sponsored retirement plan that allows employees to contribute a portion of their salary to a tax-advantaged investment account. ',
                    },
                    {
                      title: 'Roth IRAs',
                      description:
                        'Employer-sponsored retirement plan that allows employees to contribute a portion of their salary to a tax-advantaged investment account. ',
                    },
                    {
                      title: 'Health Savings Accounts (HSAs):',
                      description:
                        'Employer-sponsored retirement plan that allows employees to contribute a portion of their salary to a tax-advantaged investment account. ',
                    },
                  ]}
                />
              )} */}
            </div>
          )}
        </div>
      ),
    },
    {
      fields: ['ownsInvestmentProperty', 'investmentEquity'],
      component: (
        <div key="ownsInvestmentProperty-investmentEquity">
          <FormikRadioGroup
            name="ownsInvestmentProperty"
            className="mt-12"
            label="Do you own any additional investment properties?"
            items={YesNoRadioOptions}
          />
          {formik?.values?.ownsInvestmentProperty === 'Yes' && (
            <div className="mt-8">
              <FormikCurrencyInput
                name="investmentEquity"
                label="How much do you hold in equity across all investment properties?"
              />
            </div>
          )}
        </div>
      ),
    },
    {
      fields: ['hasLifeInsuranceAccount', 'insuranceAmount'],
      component: (
        <div id="hasLifeInsuranceAccount-insuranceAmount">
          <FormikRadioGroup
            className="mt-12"
            name="hasLifeInsuranceAccount"
            items={YesNoRadioOptions}
            label="Do you have cash value life insurance accounts?"
          />
          {formik?.values.hasLifeInsuranceAccount === 'Yes' && (
            <div className="mt-8">
              <FormikCurrencyInput
                name="insuranceAmount"
                label="How much do you have in cash value?"
              />
            </div>
          )}
        </div>
      ),
    },
    {
      fields: ['hasBusinessAssets', 'businessAssetsAmount'],
      component: (
        <div key="hasBusinessAssets">
          <FormikRadioGroup
            className="mt-12"
            name="hasBusinessAssets"
            items={YesNoRadioOptions}
            label="Do you have business/farm assets?"
          />
          {formik?.values.hasBusinessAssets === 'Yes' && (
            <div className="mt-8">
              <FormikCurrencyInput
                name="businessAssetsAmount"
                label="How much equity do you hold in business/farm assets?"
              />
            </div>
          )}
        </div>
      ),
    },
    {
      fields: ['hasAnnuities', 'annuitiesAmount'],
      component: (
        <div key="hasAnnuities">
          <FormikRadioGroup
            className="mt-12"
            name="hasAnnuities"
            items={YesNoRadioOptions}
            label="Do you own annuities?"
          />
          {formik?.values.hasAnnuities === 'Yes' && (
            <div className="mt-8">
              <FormikCurrencyInput name="annuitiesAmount" label="How much?" />
            </div>
          )}
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
    dispatch(previousInternalStep('householdFinanceStep'));
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
          primaryResidence: formik.values.primaryResidence,
          residenceEquity: Number(formik.values.residenceEquity) || null,
          ownsInvestmentProperty: formik.values.ownsInvestmentProperty === 'Yes',
          investmentEquity: Number(formik.values.investmentEquity) || null,

          isRealEstateLLCOrBusiness: formik.values.isRealEstateLLCOrBusiness === 'Yes',

          hasLifeInsuranceAccount: formik.values.hasLifeInsuranceAccount === 'Yes',
          insuranceAmount: Number(formik.values.insuranceAmount) || null,
          hasBusinessAssets: formik.values.hasBusinessAssets === 'Yes',
          businessAssetsAmount: Number(formik.values.businessAssetsAmount) || null,
          hasAnnuities: formik.values.hasAnnuities === 'YES',
          annuitiesAmount: Number(formik.values.annuitiesAmount) || null,
        });
      } else {
        dispatch(nextInternalStep('householdFinanceStep'));
        setCurrentStepIndex(currentStepIndex + 1);
        setCompletedSteps(completedSteps + 1);
      }
    } catch (error) {
      formik.setTouched(touchedFields);
    }
  };

  useEffect(() => {
    if (formik?.values.ownsInvestmentProperty === 'No') {
      formik.setFieldValue('investmentEquity', null);
    }
  }, [formik?.values.ownsInvestmentProperty]);

  useEffect(() => {
    if (formik?.values.hasLifeInsuranceAccount === 'No') {
      formik.setFieldValue('insuranceAmount', null);
    }
  }, [formik?.values.hasLifeInsuranceAccount]);
  useEffect(() => {
    if (formik?.values.primaryResidence === PrimaryResidence.Rent) {
      formik.setFieldValue('residenceEquity', null);
    }
  }, [formik?.values.primaryResidence]);
  useEffect(() => {
    if (formik?.values.hasAnnuities === 'No') {
      formik.setFieldValue('annuitiesAmount', null);
    }
  }, [formik?.values.hasAnnuities]);
  useEffect(() => {
    if (formik?.values.hasBusinessAssets === 'No') {
      formik.setFieldValue('businessAssetsAmount', null);
    }
  }, [formik?.values.hasBusinessAssets]);
  // useEffect(() => {
  //   if (formik?.values.hasEquityInvestmentProperties === 'No') {
  //     formik.setFieldValue('investmentEquity', null);
  //     formik.setFieldValue('isRealEstateLLCOrBusiness', null);
  //   }
  // }, [formik?.values.hasEquityInvestmentProperties]);

  return (
    <div className="h-full flex flex-col">
      <OnboardingContainer>
        <button className="text-mainBlue underline md:hidden" onClick={handlePrevious}>
          {'<'} Go Back
        </button>
        <div className="flex justify-between items-end">
          <Typography variation="title0" className="font-bold text-darker mb-1">
            Household Finance
          </Typography>
          <Typography variation="paragraph" className="text-dark">
            {completedSteps || 1}/{totalSteps}
          </Typography>
        </div>
        <ProgressBar total={totalSteps} current={completedSteps} className="mt-1" />
        {steps[currentStepIndex]?.component || steps[0]?.component}

        <ErrorMessage error={error} />
      </OnboardingContainer>
      <OnboardingFooter
        loading={isLoading}
        onNext={handleNext}
        nextModuleText="Students"
        onPrevious={handlePrevious}
        showNextModuleText={currentStepIndex === totalSteps - 1}
      />
    </div>
  );
};

export default HouseHoldFinance;
