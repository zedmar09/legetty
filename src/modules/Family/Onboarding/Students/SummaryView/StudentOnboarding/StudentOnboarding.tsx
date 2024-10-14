import FormikRadioGroup from '@components/Formik/FormikRadioGroup/FormikRadioGroup';
import FormikSelect from '@components/Formik/FormikSelect/FormikSelect';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import {
  graduationYearOptions,
  overallStudentTypeOptions,
  yesNoOptions,
} from '@core/data/dropdownOptions';
import { studentValidationSchema } from '@core/validation/family';
import OnboardingFooter from '@modules/Family/OnboardingFooter/OnboardingFooter';
import { OnBoardingFields } from '@typings/onboarding';
import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import * as Yup from 'yup';
import { studentDetails } from '../StudentRow/StudentRow';

interface StudentOnboardingProps {
  studentDetails: studentDetails;
  setView?: React.Dispatch<
    React.SetStateAction<'ADD_STUDENT' | 'STUDENT_SUMMARY' | 'STUDENT_ONBOARDING'>
  >;
  setSelectedStudent: React.Dispatch<React.SetStateAction<studentDetails | null>>;
}

const StudentOnboarding: React.FC<StudentOnboardingProps> = (props) => {
  const { studentDetails, setView, setSelectedStudent } = props;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);

  const formik = useFormikContext<OnBoardingFields>();

  const index = studentDetails?.index;
  const student = studentDetails?.element;

  useEffect(() => {
    if (formik.values.students && formik.values.students[index].hasIncome === 'No') {
      formik.setFieldValue(`students.${index}.incomeAmount`, null);
    }
  }, [formik.values.students[index].hasIncome]);

  useEffect(() => {
    if (formik.values.students && formik.values.students[index].hasSavingsAccount === 'No') {
      formik.setFieldValue(`students.${index}.savingsAmount`, null);
    }
  }, [formik.values.students[index].hasSavingsAccount]);

  const handlePrevious = () => {
    if (currentStepIndex === 0) {
      setView('STUDENT_SUMMARY');
    } else {
      setCompletedSteps(completedSteps - 1);
    }
    setCurrentStepIndex((prev) => prev - 1);
  };

  const handleNext = async () => {
    const fields = steps[currentStepIndex].fields;
    const validationObject = {};
    const valuesObject = {};
    const touchedFields = { students: [] };

    fields.forEach((field) => {
      validationObject[`students.${index}.${field}`] = studentValidationSchema[field];
      valuesObject[`students.${index}.${field}`] = formik.values.students[index][field];
      touchedFields.students[index] = {
        ...touchedFields.students[index],
        [field]: true,
      };
    });

    try {
      await Yup.object(validationObject).validate(valuesObject);
      setCompletedSteps(completedSteps + 1);
      if (currentStepIndex === totalSteps - 1) {
        setView('STUDENT_SUMMARY');

        if (formik.values.students[index + 1]) {
          setSelectedStudent({
            index: index + 1,
            element: { ...formik.values.students[index + 1] },
          });
        }
      } else {
        setCurrentStepIndex(currentStepIndex + 1);
      }
    } catch (error) {
      formik.setTouched(touchedFields);
    }
  };

  const graduationInFuture =
    formik.values.students &&
    formik.values.students[index].graduationYear >= new Date().getFullYear().toString()
      ? true
      : false;

  const steps = [
    {
      fields: ['graduationYear'],
      component: (
        <div key="graduationYear" className="pb-32">
          <FormikSelect
            className="mt-6"
            placeholder="Select"
            options={graduationYearOptions}
            label="High School Graduation Year"
            name={`students.${index}.graduationYear`}
          />
        </div>
      ),
    },
    {
      fields: ['overallStudentType', ...(!graduationInFuture ? ['gpa', 'sat', 'act'] : [])],
      component: (
        <>
          <p className="mt-12 font-semibold">
            Add {student.name}&apos;s Scores (If they are younger or haven’t taken the tests yet,
            please add hypothetical scores)
          </p>
          <div key="overallStudentType">
            <FormikSelect
              className="mt-8"
              placeholder="Select"
              options={overallStudentTypeOptions}
              name={`students.${index}.overallStudentType`}
              label="Overall type of student academically"
            />

            <FormikTextInput
              max={4}
              min={0}
              step={0.1}
              type="number"
              className="mt-8"
              name={`students.${index}.gpa`}
              label={`${student?.name}'s GPA`}
              placeholder={`${student?.name}'s GPA, Eg: 3.8`}
              onTextChange={(value) => {
                const hasTwoDecimalPlaces = /^\d+(\.\d{2})$/.test(value);
                if (hasTwoDecimalPlaces) {
                  formik.setFieldValue(`students.${index}.gpa`, parseFloat(value).toFixed(1));
                }
              }}
            />
            <FormikTextInput
              max={1600}
              min={0}
              type="number"
              className="mt-8"
              name={`students.${index}.sat`}
              label={`${student?.name}'s SAT`}
              placeholder={`${student?.name}'s SAT, Eg. 1400`}
            />
            <FormikTextInput
              max={36}
              min={0}
              step={0.1}
              type="number"
              className="mt-8"
              name={`students.${index}.act`}
              label={`${student?.name}'s ACT`}
              placeholder={`${student?.name}'s SAT, Eg. 28`}
            />
          </div>
        </>
      ),
    },
    {
      fields: ['hasFiledTaxes'],
      component: (
        <div key="hasFiledTaxes" className="mt-12">
          <FormikRadioGroup
            label={`Has ${student?.name && student?.name.split(' ')[0]} filed taxes?`}
            name={`students.${index}.hasFiledTaxes`}
            items={yesNoOptions}
          />
        </div>
      ),
    },
    {
      fields: ['hasIncome', 'incomeAmount'],
      component: (
        <div key="hasIncome" className="mt-12">
          <FormikRadioGroup
            label={`Does ${student?.name && student?.name.split(' ')[0]} have taxable income?`}
            name={`students.${index}.hasIncome`}
            items={yesNoOptions}
          />

          {formik.values?.students && formik.values?.students[index]?.hasIncome === 'Yes' && (
            <div className="mt-8">
              <label className="text-description1 text-darker block">How much ?</label>
              <CurrencyInput
                prefix="$"
                name="input-name"
                placeholder="$0.00"
                decimalsLimit={2}
                value={formik.values.students[index].incomeAmount}
                className="bg-white border w-full border-lightest2 p-4 py-3 rounded-lg "
                onValueChange={(value) =>
                  formik.setFieldValue(`students.${index}.incomeAmount`, value)
                }
              />
              <p className="mt-4 text-sm text-gray-500">
                Savings Tip - If your child has a checking or savings account, make sure a parents’
                name is on the bank account to maximize your savings for college. You can include
                the kids saving under the parents name to maximize savings.
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      fields: ['hasSavingsAccount', 'savingsAmount'],
      component: (
        <div key="hasSavingsAccount" className="mt-12">
          <FormikRadioGroup
            label={`Does ${student?.name && student?.name.split(' ')[0]} have savings?`}
            name={`students.${index}.hasSavingsAccount`}
            items={yesNoOptions}
          />

          {formik.values?.students &&
            formik.values?.students[index]?.hasSavingsAccount === 'Yes' && (
              <div className="mt-8">
                <label className="text-description1 text-darker block">How much?</label>
                <CurrencyInput
                  prefix="$"
                  name="input-name"
                  placeholder="$0.00"
                  decimalsLimit={2}
                  value={formik.values.students[index].savingsAmount}
                  className="bg-white border w-full border-lightest2 p-4 py-3 rounded-lg "
                  onValueChange={(value) =>
                    formik.setFieldValue(`students.${index}.savingsAmount`, value)
                  }
                />
              </div>
            )}
        </div>
      ),
    },
    {
      fields: ['hasTrustAccount'],
      component: (
        <div key="hasTrustAccount" className="mt-12">
          <FormikRadioGroup
            label={`Does ${
              student?.name && student?.name.split(' ')[0]
            } have UTMA / UGMA or Other Trust Accounts?`}
            name={`students.${index}.hasTrustAccount`}
            items={yesNoOptions}
          />
        </div>
      ),
    },
  ];

  const totalSteps = steps.length;

  return (
    <div className="flex flex-col bg-white">
      <div className="mb-2 bg-white lg:w-[508px] lg:mx-auto flex-grow py-16 px-6 lg:px-0 pb-[250px]">
        <div className="flex space-x-1 items-center">
          <button onClick={() => setView('STUDENT_SUMMARY')}>
            <Typography variation="title3" className="font-bold text-mainBlue">
              Students
            </Typography>
          </button>
          <Typography>/</Typography>
          <Typography variation="title3">{student?.name}</Typography>
        </div>
        <button className="text-mainBlue underline md:hidden" onClick={handlePrevious}>
          {'<'} Go Back
        </button>

        <div className="flex justify-between items-end mt-3">
          <Typography variation="title0" className="font-bold text-darker mb-1">
            {student?.name && student?.name.split(' ')[0]}
          </Typography>
          <Typography variation="paragraph" className="text-dark">
            {completedSteps || 1}/{totalSteps}
          </Typography>
        </div>
        <ProgressBar className="mt-1" total={totalSteps} current={completedSteps} />

        {steps[currentStepIndex]?.component || steps[0]?.component}
      </div>

      <OnboardingFooter onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  );
};

export default StudentOnboarding;
