import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import Typography from '@components/Typography/Typography';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { College } from '@typings/model/college';
import React from 'react';

interface Props {
  reportType: string;
  collegeData: College;
}

const DetailsHeader: React.FC<Props> = (props) => {
  const { reportType, collegeData } = props;

  const dispatch = useAppDispatch();

  const selectedStudent = useAppSelector((state) => state.family.selectedStudent);
  const students = useAppSelector((state) => state.auth.family?.students);

  const studentsOptions = students?.map((student) => {
    return {
      label: student?.name,
      value: student?.id,
    };
  });

  return (
    <>
      <div className="border-b border-lightest3">
        <div className="w-full flex py-7 space-x-1 sm:space-x-3 items-center px-4 sm:px-10 lg:px-0 max-w-5xl mx-auto">
          <Typography variation="title3" className="text-mainBlue !text-xs xs:!text-title3">
            College Search
          </Typography>

          <span>{'>'}</span>

          <SimpleDropdown
            iconColor="#2174BB"
            options={studentsOptions}
            value={{ label: selectedStudent?.name + '', value: selectedStudent?.id }}
            onChange={(value) => {
              const selectedStudent = students?.find((student) => student.id === value);
              dispatch(setSelectedStudent(selectedStudent));
            }}
            className="text-title3 text-mainBlue"
          />

          <Typography variation="title3" className="font-bold !text-xs xs:!text-title3">
            {reportType}
          </Typography>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="mt-8 flex justify-between">
          <div>
            <Typography variation="title1">{collegeData?.name}</Typography>
            <div className="flex space-x-4">
              <div className="flex space-x-2">
                <Typography variation="title2" className="text-dark">
                  Graduation Year:
                </Typography>
                <Typography variation="title2" className="text-darker">
                  {+selectedStudent.graduationYear}
                </Typography>
              </div>
              <div className="flex space-x-2">
                <Typography variation="title2">Student:</Typography>
                <Typography variation="title2">{selectedStudent?.name}</Typography>
              </div>
            </div>
          </div>
          {/* <div>
            <Button
              onClick={() => showToast('Work in progress')}
              className="bg-white !text-darker px-4 !py-4 gap-2 border border-darker">
              <CompareIcon />
              Add to compare list
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DetailsHeader;
