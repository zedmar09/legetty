import ExModal from '@components/ExModal/ExModal';
import PlusIcon from '@components/Icons/PlusIcon';
import Typography from '@components/Typography/Typography';
import { OnBoardingFields } from '@typings/onboarding';
import { cn } from '@utils/style';
import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import ActionsDropdown from './ActionsDropdown';
import AddAndEditStudent from './AddAndEditStudent';
import StudentRow, { studentDetails } from './StudentRow/StudentRow';

interface SummaryViewProps {
  setView: (view: 'ADD_STUDENT' | 'STUDENT_SUMMARY' | 'STUDENT_ONBOARDING') => void;
  selectedStudent: studentDetails;
  setSelectedStudent: React.Dispatch<React.SetStateAction<studentDetails | null>>;
  handleNext: () => void;
}

const SummaryView: React.FC<SummaryViewProps> = (props) => {
  const { selectedStudent, setSelectedStudent, handleNext } = props;
  const formik = useFormikContext<OnBoardingFields>();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addValue, setAddValue] = useState('');

  useEffect(() => {
    if (!selectedStudent && formik.values.students?.[0]?.name) {
      setSelectedStudent({ index: 0, element: { ...formik?.values?.students?.[0] } });
    }
  }, []);

  const allStudent = formik.values.students.reduce((acc, select, index) => {
    acc.push({ index, element: select });
    return acc;
  }, []);

  return (
    <div>
      <ExModal
        visible={openAddModal}
        title="Add Student"
        description={<AddAndEditStudent setAddAndEditValue={setAddValue} />}
        confirmBtnType="mainBlue"
        confirmLabel="Add Student"
        onClose={() => setOpenAddModal(false)}
        onConfirm={() => {
          if (formik.values.students && addValue) {
            formik.setFieldValue('students', [...formik.values?.students, { name: addValue }]);
            setOpenAddModal(false);
          }
        }}
      />
      <Typography variation="title2" className="font-bold text-darker mt-10">
        We&apos;ll need quick details from each of your students.
      </Typography>

      <div className="mt-6 border border-lightest3 rounded-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <Typography variation="title3" className="font-bold">
            Your Students
          </Typography>
          {/* TODO: Replace with icon button */}
          <div className="flex">
            <ActionsDropdown selectedStudent={selectedStudent} />
            <button onClick={() => setOpenAddModal(true)}>
              <PlusIcon />
            </button>
          </div>
        </div>
        <div>
          {allStudent &&
            allStudent.map((student, index) => {
              const completedSteps = Object.values({
                graduationYear: student.element.graduationYear,
                overallStudentType: student.element.overallStudentType,
                hasFiledTaxes: student.element.hasFiledTaxes,
                hasIncome: student.element.hasIncome,
                hasSavingsAccount: student.element.hasSavingsAccount,
                hasTrustAccount: student.element.hasTrustAccount,
              }).filter((value) => !!value).length;

              return (
                <StudentRow
                  key={index}
                  studentDetails={student}
                  onSelect={(student) => {
                    setSelectedStudent({ ...student });
                  }}
                  completedSteps={completedSteps}
                  handleNext={handleNext}
                  isSelected={index === selectedStudent?.index}
                  className={cn(
                    formik?.values?.students && index === formik?.values?.students.length - 1
                      ? 'border-b-0'
                      : null
                  )}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
