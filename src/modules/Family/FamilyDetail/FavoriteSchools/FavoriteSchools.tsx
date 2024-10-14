import Button from '@components/Button/Button';
import ArrowForwardIcon from '@components/Icons/ArrowForward';
import UserAvatar from '@components/Icons/UserAvatar';
import Typography from '@components/Typography/Typography';
import SchoolMarksTable from '@modules/common/SchoolMarksTable/SchoolMarksTable';
import { College } from '@typings/model/college';
import { Student } from '@typings/model/family';
import { cn } from '@utils/style';
import React, { Fragment, useState } from 'react';
import FavouriteSchoolModal from './FavouriteSchoolModal';

interface FavoriteSchoolsProps {
  className?: string;
  student: Partial<Student>;
  schools?: { id: string; college: College }[];
  showViewAllbutton?: boolean;
}

const FavoriteSchools: React.FC<FavoriteSchoolsProps> = (props) => {
  const { student, schools, className, showViewAllbutton } = props;
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <FavouriteSchoolModal
        student={student}
        schools={schools}
        open={openModal}
        setOpen={setOpenModal}
      />
      <div className={cn('rounded-xl !relative border shadow-md', className)}>
        <div className="bg-lightest4 px-6 py-4 rounded-t-xl flex flex-col md:flex-row md:items-center justify-between  border-lightest3">
          <div className="flex items-center">
            <UserAvatar />
            <div className="ml-4 mr-auto">
              <Typography variation="title2" className="text-darker capitalize">
                {student?.name}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full" />
              <Typography variation="description1">
                Viewed as: {student.overallStudentType}
              </Typography>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full" />
              <Typography variation="description1">
                HS Graduation Year: {student.graduationYear}
              </Typography>
            </div>
          </div>
        </div>
        {schools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {schools?.map((school, index) => {
                return (
                  <div key={school.id} className={`p-4 flex flex-col border-r`}>
                    <div className="flex-grow flex items-center">
                      <Typography variation="title3" className="font-semibold flex-grow">
                        {school?.college?.name}
                      </Typography>
                    </div>
                    <SchoolMarksTable
                      student={student}
                      schoolTitleName="School"
                      studentTitleName="Student"
                      school={school?.college}
                    />
                  </div>
                );
              })}
            </div>
            {showViewAllbutton && (
              <div className="!absolute right-4 bottom-4">
                <Button
                  onClick={() => setOpenModal(true)}
                  size="small"
                  icon={<ArrowForwardIcon fill="#0068F8" />}
                  variation="landing"
                  className="bg-white !text-mainBlue border border-lightest3 shadow-md">
                  View All
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="p-16 text-center text-dark rounded">
            {student.name} has not favorite colleges
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FavoriteSchools;
