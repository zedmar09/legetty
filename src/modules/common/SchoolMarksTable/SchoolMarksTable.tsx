import CheckIcon from '@components/Icons/CheckIcon';
import UncheckedIcon from '@components/Icons/UncheckIcon';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import { College } from '@typings/model/college';
import { Student } from '@typings/model/family';
import React from 'react';

interface SchoolMarksTableProps {
  school: Partial<College>;
  student: Partial<Student>;
  className?: string;
  schoolTitleName?: string;
  studentTitleName?: string;
}

const SchoolMarksTable: React.FC<SchoolMarksTableProps> = (props) => {
  const { school, student, className, schoolTitleName, studentTitleName } = props;

  const { maleAdmissions, femaleAdmissions } = school;

  const acceptanceRate =
    ((Number(maleAdmissions?.accepted) + Number(femaleAdmissions?.accepted)) /
      (Number(maleAdmissions?.applied) + Number(femaleAdmissions?.applied))) *
    100;

  const acceptanceText = isNaN(acceptanceRate) ? 'N/A' : `${acceptanceRate.toFixed(2)}%`;

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <Typography variation="title3" className="text-dark">
            Acceptance Rate
          </Typography>
          <Typography variation="title2" className="font-bold">
            {acceptanceText}
          </Typography>
        </div>
        <ProgressBar className="mt-1.5" background="#008000" current={acceptanceRate} total={100} />
      </div>

      <div className="mt-4 grid grid-cols-3 border-lightest3">
        <div className="py-2 pl-2 border-r border-b"></div>
        <div className="py-2 pl-2 border-r border-b">
          <Typography variation="description1" className="font-bold text-dark">
            {schoolTitleName || 'School Average'}
          </Typography>
        </div>
        <div className="py-2 pl-2 border-b">
          <Typography variation="description1" className="font-bold text-dark">
            {studentTitleName || `${student.name}'s`}
          </Typography>
        </div>

        <div className="py-2 pl-2 border-b border-r">
          <Typography variation="description1" className="font-bold text-dark">
            GPA
          </Typography>
        </div>
        <div className="py-2 pl-2 border-b border-r">
          {Number(school?.requiredGpa)?.toFixed?.(1)}
        </div>
        <div className="py-2 pl-2 border-b flex justify-between">
          {Number(student?.gpa)?.toFixed?.(1)}
          {student?.gpa >= school.requiredGpa ? <CheckIcon /> : <UncheckedIcon />}
        </div>

        <div className="py-2 pl-2 border-b border-r">
          <Typography variation="description1" className="font-bold text-dark">
            SAT
          </Typography>
        </div>
        <div className="py-2 pl-2 border-b border-r">{school?.requiredSat}</div>
        <div className="py-2 pl-2 border-b flex justify-between">
          {student?.sat}
          {student?.sat >= school.requiredSat ? <CheckIcon /> : <UncheckedIcon />}
        </div>

        <div className="py-2 pl-2 border-r">
          <Typography variation="description1" className="font-bold text-dark">
            ACT
          </Typography>
        </div>
        <div className="py-2 pl-2 border-r">{school?.requiredAct}</div>
        <div className="py-2 pl-2 flex justify-between">
          {student?.act}
          {student?.act >= school.requiredAct ? <CheckIcon /> : <UncheckedIcon />}
        </div>
      </div>
    </div>
  );
};

export default SchoolMarksTable;
