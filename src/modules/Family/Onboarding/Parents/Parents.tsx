import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikCurrencyInput from '@components/Formik/FormikCurrencyInput/FormikCurrencyInput';
import FormikRadioGroup, { RadioItem } from '@components/Formik/FormikRadioGroup/FormikRadioGroup';
import FormikSelect from '@components/Formik/FormikSelect/FormikSelect';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import MinusIcon from '@components/Icons/MinusIcon';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { getTaxRate } from '@core/config/taxBracket';
import { showToast } from '@core/config/toast';
import { filingStatusOptions, martialStatusOptions } from '@core/data/dropdownOptions';
import {
  nextInternalStep,
  nextStep,
  previousInternalStep,
  previousStep,
  refetchFamilyProfile,
} from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import { UpdateParentParams } from '@core/services/family/auth';
import { parentValidationSchema } from '@core/validation/family';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import OnboardingFooter from '@modules/Family/OnboardingFooter/OnboardingFooter';
import { useMutation } from '@tanstack/react-query';
import { Family, FilingStatus, Parent } from '@typings/model/family';
import { OnBoardingFields } from '@typings/onboarding';
import { usdFormatter } from '@utils/common';
import { FieldArray, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as Yup from 'yup';

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

interface ParentsProps {}

interface validation {
  [key: string]: any;
}

const Parents: React.FC<ParentsProps> = (props) => {
  const dispatch = useAppDispatch();
  const formik = useFormikContext<OnBoardingFields>();
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });
  const parentStep = useAppSelector((state) => state.auth.onboarding.parentStep);
  const [completedSteps, setCompletedSteps] = useState(parentStep);
  const [currentStepIndex, setCurrentStepIndex] = useState(parentStep);

  const {
    isLoading: updatingProfile,
    error: updatingProfileError,
    mutate: updateProfile,
  } = useMutation(
    async (params: {
      familyData: Partial<Family>;
      newParents: Parent[];
      existingParents: UpdateParentParams[];
    }) => {
      let family = null;
      let parents = null;
      let updatedParent = null;
      const { familyData, newParents, existingParents } = params;
      if (Object.keys(familyData).length > 0) {
        family = await API.family.auth.updateProfile(familyData);
      }
      if (newParents.length > 0) parents = await API.family.auth.addParent(newParents);

      if (existingParents.length > 0) {
        await Promise.all(existingParents.map((parent) => API.family.auth.updateParent(parent)));
      }
      return {
        family,
        parents,
        updatedParent,
      };
    },
    {
      onSuccess() {
        dispatch(refetchFamilyProfile());
        dispatch(nextStep());
        showToast('Parents saved successfully');
      },
    }
  );

  const steps = [
    {
      fields: ['firstName', 'lastName', 'age'],
      component: (
        <div key="name" className="mt-12 bg-white w-full">
          <FieldArray
            name="parents"
            key={formik.values.parents && formik.values.parents.length.toString()}
            render={({ push, remove }) => (
              <div>
                {formik.values.parents &&
                  formik.values.parents.map((parent, index) => (
                    <div key={index} className="mt-6">
                      <Typography variation="title3" className="font-bold text-darker mb-2">
                        Parent {index + 1}
                      </Typography>
                      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} relative `}>
                        <div className="flex flex-col lg:flex-row md:max-w-[508px] w-full space-y-2 lg:space-y-0 lg:space-x-4">
                          <FormikTextInput
                            label="First Name"
                            className="lg:w-2/5"
                            name={`parents.${index}.firstName`}
                            placeholder={`Parent ${index + 1} First Name`}
                          />
                          <FormikTextInput
                            label="Last Name"
                            className="lg:w-2/5"
                            name={`parents.${index}.lastName`}
                            placeholder={`Parent ${index + 1} Last Name`}
                          />
                          <FormikTextInput
                            label="Age"
                            type="number"
                            className="lg:w-1/5"
                            name={`parents.${index}.age`}
                            placeholder="Age"
                            max={100}
                          />
                        </div>

                        {formik.values.parents && formik.values.parents.length > 1 && (
                          <button
                            className={` bg-lightest4  flex justify-center items-center cursor-pointer ${
                              isMobile
                                ? 'static py-2 mt-2 rounded-md text-title3 text-gray-500'
                                : 'absolute top-[20px] -right-[66px] rounded-full w-[50px] h-[50px]'
                            }  `}
                            onClick={() => remove(index)}>
                            {isMobile ? 'Remove' : <MinusIcon />}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                {formik.values.parents && formik.values.parents.length < 2 && (
                  <div className="md:max-w-[508px]">
                    <Button
                      onClick={() => push({ name: null, dateOfBirth: null })}
                      className="bg-white font-bold !text-darker text-base text-center w-full border border-lightest rounded-lg mt-8">
                      Add Parent
                    </Button>
                  </div>
                )}
              </div>
            )}
          />
        </div>
      ),
    },
    {
      fields: ['maritalStatus'],
      component: (
        <div key="maritalStatus" className="mt-12">
          <FieldArray
            name="parents"
            key={formik.values.parents && formik.values.parents.length.toString()}
            render={() => (
              <div className="w-full">
                {formik.values.parents &&
                  formik.values.parents.map((parent, index) => (
                    <div key={index}>
                      <FormikSelect
                        className="mb-6"
                        placeholder="Please Select"
                        options={martialStatusOptions}
                        label={`${parent?.firstName + ' ' + parent?.lastName}'s Marital Status`}
                        name={`parents.${index}.maritalStatus`}
                      />
                    </div>
                  ))}
              </div>
            )}
          />
        </div>
      ),
    },
    ...(formik.values.parents || [])?.map((parent, index) => {
      return {
        parentIndex: index,
        fields: [`annualIncome`, `filingStatus`, 'standardDeduction', 'taxableIncome'],
        component: (
          <div className="mt-12" key={index}>
            <FormikCurrencyInput
              className="mb-6"
              name={`parents.${index}.annualIncome`}
              label={`${parent?.firstName + ' ' + parent?.lastName}'s Annual Income`}
              onTextChange={(income) => {
                const filingStatus = parent.filingStatus as FilingStatus;
                if (filingStatus) {
                  const standardDeduction = +income * getTaxRate(filingStatus, +income);
                  const taxableIncome = +income - standardDeduction;
                  formik.setFieldValue(
                    `parents[${index}].standardDeduction`,
                    standardDeduction.toFixed(2)
                  );
                  formik.setFieldValue(`parents[${index}].taxableIncome`, taxableIncome.toFixed(2));
                }
              }}
            />

            {formik.values.parents && formik.values.parents[index]?.annualIncome && (
              <FormikSelect
                name={`parents.${index}.filingStatus`}
                label={`${parent?.firstName + ' ' + parent?.lastName}'s Filing Status`}
                options={filingStatusOptions}
                className="mt-6"
                placeholder="Select filing Status"
                onSelect={(filingStatus: FilingStatus) => {
                  const income = +formik.values.parents[index]?.annualIncome;
                  const standardDeduction = income * getTaxRate(filingStatus, income);
                  const taxableIncome = income - standardDeduction;
                  formik.setFieldValue(
                    `parents[${index}].standardDeduction`,
                    standardDeduction.toFixed(2)
                  );
                  formik.setFieldValue(`parents[${index}].taxableIncome`, taxableIncome.toFixed(2));
                }}
              />
            )}

            {formik.values.parents &&
              formik.values.parents[index]?.annualIncome &&
              formik.values.parents[index]?.filingStatus && (
                <>
                  <FormikCurrencyInput
                    className="my-6"
                    name={`parents.${index}.standardDeduction`}
                    label={`${parent?.firstName + ' ' + parent?.lastName}'s Estimated Tax Paid`}
                  />
                  <div className="p-4 rounded-lg bg-lightest4 mt-8 divide-y divide-gray-400">
                    <div className="flex justify-between items-center py-2">
                      <div className="">Taxable Income</div>
                      <div className="font-semibold">
                        {formik.values.parents[index]?.taxableIncome > 0
                          ? usdFormatter.format(formik.values.parents[index]?.taxableIncome)
                          : usdFormatter.format(0)}
                      </div>
                    </div>
                  </div>
                </>
              )}
          </div>
        ),
      };
    }),
    {
      fields: ['checkingAmount'],
      component: (
        <div className="w-full mt-12">
          <FormikCurrencyInput
            className="mb-6"
            name="checkingAmount"
            label="Family's combined estimated value in checking account, savings account, money markets, etc."
          />
        </div>
      ),
    },
    {
      fields: ['hasTaxableBrokerageAccounts', 'taxableBrokerageAccountsAmount'],
      component: (
        <div className="w-full">
          <FormikRadioGroup
            className="mt-12"
            items={YesNoRadioOptions}
            name="hasTaxableBrokerageAccounts"
            label={`Does family have any taxable brokerage accounts?`}
          />

          {formik.values.hasTaxableBrokerageAccounts === 'Yes' && (
            <FormikCurrencyInput
              className="my-6"
              label="Taxable Brokerage Amount"
              name="taxableBrokerageAccountsAmount"
            />
          )}
        </div>
      ),
    },
    {
      fields: ['hasCollegeSavingsAccounts', 'collegeSavingsAccountsAmount'],
      component: (
        <div className="w-full">
          <FormikRadioGroup
            className="mt-12"
            items={YesNoRadioOptions}
            name="hasCollegeSavingsAccounts"
            label={`Does family have any college savings accounts? (529, Coverdell, Prepaid tuition, etc)`}
          />

          {formik.values.hasCollegeSavingsAccounts === 'Yes' && (
            <FormikCurrencyInput
              className="my-6"
              label="Taxable Brokerage Amount"
              name="collegeSavingsAccountsAmount"
            />
          )}
        </div>
      ),
    },
    {
      fields: ['retirementPlan', 'annualRetirementAmount'],
      component: (
        <div className="w-full">
          <div className="mb-6 space-y-1">
            <FormikRadioGroup
              name="retirementPlan"
              className="mt-12"
              label={
                <div className="flex flex-col">
                  <span>Does family contribute to a qualified retirement plan?</span>
                  <span className="text-dark text-description1 font-normal">
                    Eg: 401k, IRA, 403b, etc{' '}
                  </span>
                </div>
              }
              items={YesNoRadioOptions}
            />
            {formik.values.retirementPlan === 'Yes' && (
              <div className="pt-8">
                <FormikCurrencyInput label="How much annually" name="annualRetirementAmount" />
              </div>
            )}
          </div>
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
    dispatch(previousInternalStep('parentStep'));
    setCurrentStepIndex((prev) => prev - 1);
  };

  const handleNext = async () => {
    const parentIndex = (steps[currentStepIndex] as any).parentIndex as number;
    const fields = steps[currentStepIndex].fields;
    const validationObject: validation = {};
    const valuesObject: validation = {};
    const touchedFields = { parents: [] };

    fields.forEach((field) => {
      if (parentIndex !== undefined) {
        validationObject[`parents.${parentIndex}.${field}`] = parentValidationSchema[field];
        valuesObject[`parents.${parentIndex}.${field}`] =
          // @ts-ignore
          formik.values.parents?.[parentIndex][field];
        // @ts-ignore
        touchedFields.parents[parentIndex] = {
          // @ts-ignore
          ...touchedFields.parents[parentIndex],
          [field]: true,
        };
      } else {
        // @ts-ignore
        formik.values.parents.forEach((parent, index) => {
          validationObject[`parents.${index}.${field}`] = parentValidationSchema[field];
          // @ts-ignore
          valuesObject[`parents.${index}.${field}`] = formik.values.parents[index][field];
          // @ts-ignore
          touchedFields.parents[index] = {
            // @ts-ignore
            ...touchedFields.parents[index],
            [field]: true,
          };
        });
      }
    });

    try {
      await Yup.object().shape(validationObject).validate(valuesObject);

      if (currentStepIndex === totalSteps - 1) {
        const { values } = formik;
        const parentFields: Partial<Parent[]> = values.parents.map((parent) => {
          return {
            parentId: parent.parentId,
            firstName: parent.firstName.trim(),
            lastName: parent.lastName.trim(),
            age: parent.age,
            maritalStatus: parent.maritalStatus,
            annualIncome: Number(parent.annualIncome),
            filingStatus: parent.filingStatus as FilingStatus,
            standardDeduction: parent.standardDeduction,
            taxableIncome: parent.taxableIncome,
          };
        });
        const familyFields: Partial<Family> = {
          checkingAmount: Number(values.checkingAmount),
          hasTaxableBrokerageAccounts: values.hasTaxableBrokerageAccounts == 'Yes',
          taxableBrokerageAccountsAmount: Number(values.taxableBrokerageAccountsAmount),
          hasCollegeSavingsAccounts: values.hasCollegeSavingsAccounts === 'Yes',
          collegeSavingsAccountsAmount: Number(values.collegeSavingsAccountsAmount),
          retirementPlan: values.retirementPlan === 'Yes',
          annualRetirementAmount: Number(values.annualRetirementAmount),
        };
        const existingParents = parentFields.filter((parent) => parent.parentId);
        const newParents = parentFields.filter((parent) => !parent.parentId);
        updateProfile({
          familyData: familyFields,
          newParents,
          existingParents: existingParents.map(({ parentId, ...updates }) => ({
            parentId,
            data: updates,
          })),
        });
      } else {
        setCompletedSteps(completedSteps + 1);
        dispatch(nextInternalStep('parentStep'));
        setCurrentStepIndex(currentStepIndex + 1);
      }
    } catch (error) {
      formik.setTouched(touchedFields);
    }
  };

  // TODO: Might as well refactor to a better approach!!
  useEffect(() => {
    formik.values.parents && formik.values.parents.forEach((parent, index) => {});
  }, [JSON.stringify(formik.values.parents)]);

  useEffect(() => {
    if (formik.values.hasTaxableBrokerageAccounts === 'No') {
      formik.setFieldValue(`taxableBrokerageAccountsAmount`, null);
    }
    if (formik.values.hasCollegeSavingsAccounts === 'No') {
      formik.setFieldValue('collegeSavingsAccountsAmount', null);
    }
    if (formik.values.retirementPlan === 'No') {
      formik.setFieldValue('annualRetirementAmount', null);
    }
  }, [JSON.stringify(formik.values)]);

  useEffect(() => {
    const bothFieldsAreFilled =
      formik.values.parents && formik.values.parents.every((parent) => parent.age);

    if (currentStepIndex === totalSteps - 1 && bothFieldsAreFilled) {
      setCompletedSteps(totalSteps);
    }
  }, [currentStepIndex, formik.values.parents]);

  return (
    <div className="h-full flex flex-col">
      <OnboardingContainer>
        <button className="text-mainBlue underline md:hidden" onClick={handlePrevious}>
          {'<'} Go Back
        </button>
        <div className="flex justify-between items-end">
          <Typography variation="title0" className="font-bold text-darker mb-1">
            Parents
          </Typography>
          <Typography variation="paragraph" className="text-dark">
            {completedSteps || 1}/{totalSteps}
          </Typography>
        </div>
        <ProgressBar total={totalSteps} current={completedSteps} className="mt-1" />
        {steps[currentStepIndex]?.component || steps[0]?.component}
        <ErrorMessage error={updatingProfileError} />
      </OnboardingContainer>
      <OnboardingFooter
        loading={updatingProfile}
        onNext={handleNext}
        onPrevious={handlePrevious}
        nextModuleText="Household Finance"
        showNextModuleText={currentStepIndex === totalSteps - 1}
      />
    </div>
  );
};

export default Parents;
