import Typography from '@components/Typography/Typography';
import React from 'react';
import CollegeSearchCombobox from './CollegeSearchCombobox';
import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';

interface SpecificCollegeProps {}

const SpecificCollege: React.FC<SpecificCollegeProps> = (props) => {
  const {} = props;

  const dispatch = useAppDispatch();

  const students = useAppSelector((state) => state.auth.family?.students);
  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);

  const studentsOptions = students?.map((student) => {
    return {
      label: student?.name,
      value: student?.id,
    };
  });

  return (
    <div className="pt-10 bg-white">
      <div className="max-w-[680px] mx-auto px-8 md:px-0">
        <div className="p-6 bg-mainBlue rounded-lg text-white">
          <div className="flex flex-col sm:flex-row justify-between pb-4 border-b-[0.2px] border-opacity-50 border-white">
            <SimpleDropdown
              options={studentsOptions}
              value={{ label: selectedStudent?.name, value: selectedStudent?.id }}
              onChange={(value) => {
                const selectedStudent = students?.find((student) => student.id === value);
                dispatch(setSelectedStudent(selectedStudent));
              }}
              className="text-title2"
            />
          </div>

          <div className="flex flex-col justify-between space-y-2 mt-4">
            <Typography variation="description1">College</Typography>
            <CollegeSearchCombobox isSearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificCollege;
