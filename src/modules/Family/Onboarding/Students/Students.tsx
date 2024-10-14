import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import MinusIcon from '@components/Icons/MinusIcon';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { localStorageKeys } from '@core/config/keys';
import { showToast } from '@core/config/toast';
import { previousStep, refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import API from '@core/services';
import { studentValidationSchema } from '@core/validation/family';
import OnboardingFooter from '@modules/Family/OnboardingFooter/OnboardingFooter';
import { useMutation } from '@tanstack/react-query';
import { OnBoardingFields } from '@typings/onboarding';
import { cn } from '@utils/style';
import { FieldArray, useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as Yup from 'yup';
import StudentOnboarding from './SummaryView/StudentOnboarding/StudentOnboarding';
import { studentDetails } from './SummaryView/StudentRow/StudentRow';
import SummaryView from './SummaryView/SummaryView';

interface StudentsProps {}

const totalSteps = 1;

const Students: React.FC<StudentsProps> = (props) => {
  const {} = props;

  const router = useRouter();
  const dispatch = useAppDispatch();
  const formik = useFormikContext<OnBoardingFields>();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });
  const [selectedStudent, setSelectedStudent] = useState<studentDetails | null>(null);
  const [view, setView] = useState<'ADD_STUDENT' | 'STUDENT_SUMMARY' | 'STUDENT_ONBOARDING'>(
    'ADD_STUDENT'
  );

  const { mutateAsync: doneOnboarding } = useMutation(
    ['/family/profile/done-onboarding'],
    API.family.auth.doneOnboarding
  );

  const {
    isLoading,
    error,
    mutateAsync: addStudent,
  } = useMutation(API.family.auth.addStudent, {
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  const {
    isLoading: updateStudentLoading,
    error: updateStudentError,
    mutate: updateStudent,
  } = useMutation(API.family.auth.updateStudent, {
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  useEffect(() => {
    if (!selectedStudent && formik.values.students?.[0]?.name) {
      setSelectedStudent({ index: 0, element: { ...formik?.values?.students?.[0] } });
    }
  }, []);

  const allStudentsFilled =
    formik.values.students &&
    formik.values.students.every(
      (student) =>
        Object.values({
          graduationYear: student.graduationYear,
          overallStudentType: student.overallStudentType,
          hasFiledTaxes: student.hasFiledTaxes,
          hasIncome: student.hasIncome,
          hasTrustAccount: student.hasTrustAccount,
        }).filter((value) => !!value).length === 5
    );

  const handlePrevious = () => {
    if (view === 'ADD_STUDENT') {
      dispatch(previousStep());
    } else {
      setView('ADD_STUDENT');
    }
  };

  const handleNext = async () => {
    if (formik.values.students.length > 0) {
      if (allStudentsFilled && view === 'STUDENT_SUMMARY') {
        const existingStudents = formik.values.students.filter((student) => student.studentId);
        const newStudents = formik.values.students.filter((student) => !student.studentId);
        if (newStudents.length > 0) {
          formik.values.students &&
            (await addStudent(
              formik.values.students.map((student) => ({
                name: student.name.trim(),
                act: Number(student.act),
                gpa: Number(student.gpa),
                sat: Number(student.sat),
                graduationYear: student.graduationYear,
                hasFiledTaxes: student.hasFiledTaxes === 'Yes',
                hasIncome: student.hasIncome === 'Yes',
                incomeAmount: Number(student.incomeAmount),
                hasTrustAccount: student.hasTrustAccount === 'Yes',
                overallStudentType: student.overallStudentType,
                hasSavingsAccount: student.hasSavingsAccount === 'Yes',
                savingsAmount: Number(student.savingsAmount),
              }))
            ));
        }
        if (existingStudents.length > 0) {
          existingStudents.map((student) =>
            //  @ts-ignore
            updateStudent({ studentId: student.studentId, student })
          );
        }
        localStorage.setItem(localStorageKeys.ONBOARDING, 'yes');
        await doneOnboarding();
        await dispatch(refetchFamilyProfile());
        showToast('Student information saved successfully');
        setTimeout(() => {
          router.push('/family/federal-sai-calculation');
        }, 200);
      } else if (view === 'STUDENT_SUMMARY') {
        setView('STUDENT_ONBOARDING');
      } else if (currentStepIndex === totalSteps) {
        setView('STUDENT_SUMMARY');
      } else {
        const fields = addStudentSteps[currentStepIndex].fields;
        const validationObject = {};
        const valuesObject = {};
        const touchedFields = {
          students: [],
        };
        fields.forEach((field) => {
          // @ts-ignore
          formik.values.students.forEach((student, index) => {
            // @ts-ignore
            validationObject[`students.${index}.${field}`] = studentValidationSchema[field];
            // @ts-ignore
            valuesObject[`students.${index}.${field}`] = formik.values.students[index][field];
            // @ts-ignore
            touchedFields.students[index] = {
              // @ts-ignore
              ...touchedFields.students[index],
              [field]: true,
            };
          });
        });

        try {
          await Yup.object(validationObject).validate(valuesObject);
          if (currentStepIndex === totalSteps - 1) {
            setView('STUDENT_SUMMARY');
          } else {
            setCurrentStepIndex(currentStepIndex + 1);
            setCompletedSteps(completedSteps + 1);
          }
        } catch (error) {
          //@ts-ignore
          formik.setTouched(touchedFields);
        }
      }
    } else {
      showToast('You must add at least one student.');
    }
  };

  const addStudentSteps = [
    {
      fields: ['name'],
      component: (
        <div key="students">
          <FieldArray
            name="students"
            render={({ push, remove }) => (
              <div>
                {formik?.values?.students &&
                  formik?.values?.students.map((student, index) => (
                    <div
                      key={index}
                      className={`flex ${isMobile ? 'flex-col' : 'flex-row'} mt-6 relative `}>
                      <div className="flex flex-col lg:flex-row w-full lg:space-x-4">
                        <FormikTextInput
                          label="Student's Name"
                          name={`students.${index}.name`}
                          placeholder="Student's name"
                          className="flex-1 w-full "
                        />
                      </div>

                      {formik?.values?.students && formik.values?.students.length > 1 && (
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
                  ))}
                {formik?.values?.students && formik.values.students.length < 20 && (
                  <Button
                    onClick={() => push({ name: null })}
                    className="bg-white font-bold !text-black text-center w-full border border-lightest rounded-lg mt-8">
                    Add Another Student
                  </Button>
                )}
              </div>
            )}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const allStudentsFilled =
      formik?.values?.students && formik.values.students.every((student) => student.name);
    if (allStudentsFilled) {
      setCompletedSteps(1);
    } else {
      setCompletedSteps(0);
    }
  }, [formik.values.students]);

  let currentView: React.ReactNode = null;

  if (view === 'ADD_STUDENT') {
    currentView = addStudentSteps[currentStepIndex].component;
  } else if (view === 'STUDENT_SUMMARY') {
    currentView = (
      <SummaryView
        setView={setView}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        handleNext={handleNext}
      />
    );
  } else {
    currentView = selectedStudent && (
      <StudentOnboarding
        setView={setView}
        studentDetails={selectedStudent}
        setSelectedStudent={setSelectedStudent}
      />
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div
        className={cn(
          view !== 'STUDENT_ONBOARDING'
            ? 'lg:w-[508px] lg:mx-auto flex-grow py-16 pb-36 px-6 lg:px-0'
            : 'h-full'
        )}>
        {view === 'ADD_STUDENT' ? (
          <>
            <button className="text-mainBlue underline md:hidden" onClick={handlePrevious}>
              {'<'} Go Back
            </button>
            <div className="flex justify-between items-end">
              <Typography variation="title0" className="font-bold text-darker mb-1">
                Students
              </Typography>
              <Typography variation="paragraph" className="text-dark">
                {completedSteps}/{totalSteps}
              </Typography>
            </div>
            <ProgressBar total={totalSteps} current={completedSteps} className="mt-1" />
            <Typography variation="title2" className="mt-12 mb-10 font-bold">
              Add your children (students) names.
            </Typography>
          </>
        ) : view === 'STUDENT_SUMMARY' ? (
          <>
            <button className="text-mainBlue underline md:hidden" onClick={handlePrevious}>
              {'<'} Go Back
            </button>
            <Typography variation="title0" className="font-bold text-darker mb-1">
              Students
            </Typography>
          </>
        ) : null}

        {currentView}

        <ErrorMessage error={error} />
      </div>

      {view !== 'STUDENT_ONBOARDING' && (
        <OnboardingFooter
          loading={isLoading}
          onPrevious={handlePrevious}
          onNext={handleNext}
          doneOnboarding={(allStudentsFilled && view === 'STUDENT_SUMMARY') || false}
          onNextDisabled={!selectedStudent && view === 'STUDENT_SUMMARY'}
        />
      )}
    </div>
  );
};

export default Students;
