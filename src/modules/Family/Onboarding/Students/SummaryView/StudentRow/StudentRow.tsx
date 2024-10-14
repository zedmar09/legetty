import ProgressBar from '@components/ProgressBar/ProgressBar';
import RadioButton from '@components/RadioButton/RadioButton';
import Typography from '@components/Typography/Typography';
import { OnboardingStudent } from '@typings/onboarding';
import { cn } from '@utils/style';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export interface studentDetails {
  index: number;
  element: OnboardingStudent;
}

interface StudentRowProps {
  studentDetails: studentDetails;
  className?: string;
  isSelected?: boolean;
  completedSteps?: number;
  onSelect?: (student: studentDetails) => void;
  handleNext?: () => void;
}

const StudentRow: React.FC<StudentRowProps> = (props) => {
  const { studentDetails, completedSteps, isSelected, className, onSelect, handleNext } = props;
  const student = studentDetails.element;

  const handleSelect = () => {
    onSelect?.(studentDetails);
  };

  return (
    <div
      className={cn(
        'px-6 py-5 border-b border-lightest3 flex justify-between items-center space-x-12 cursor-pointer',
        className
      )}
      onClick={handleSelect}>
      <div className="w-[30%]">
        <Typography variation="title3" className="text-darker truncate">
          {student.name}
        </Typography>
      </div>

      <div className="flex items-center w-auto flex-1">
        <ProgressBar total={6} current={completedSteps} className="w-full" />
        <Typography variation="description1" className="text-dark ml-4">
          {completedSteps}/{6}
        </Typography>
      </div>
      {completedSteps === 6 ? (
        <div
          className="pr-2"
          onClick={() => {
            handleNext();
            handleSelect();
          }}>
          <ArrowRight className="text-mainBlue" />
        </div>
      ) : (
        <RadioButton checked={isSelected} onChange={handleSelect} />
      )}
    </div>
  );
};

export default StudentRow;
