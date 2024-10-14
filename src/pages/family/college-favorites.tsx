import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import EmptyState from '@components/EmptyState/EmptyState';
import Typography from '@components/Typography/Typography';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import CollegeCard from '@modules/Family/Colleges/CollegeCard/CollegeCard';
import Head from 'next/head';
import React from 'react';

interface favoritesProps {}

const FavoritesPage: React.FC<favoritesProps> = (props) => {
  const dispatch = useAppDispatch();

  const family = useAppSelector((state) => state.auth.family);
  const selectedStudent = useAppSelector((state) => state.family.selectedStudent);
  const students = useAppSelector((state) => state.auth.family?.students);

  const studentsOptions =
    students?.map((student) => {
      return {
        label: student?.name,
        value: student?.id,
      };
    }) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
      <Head>
        <title>Favorites College</title>
      </Head>
      <div>
        <Typography variation="title2" className="mb-2">
          Favorites College
        </Typography>
        <div className="flex">
          {students?.length > 1 ? (
            <SimpleDropdown
              iconColor="#2174BB"
              options={studentsOptions}
              value={{ label: selectedStudent?.name + '', value: selectedStudent?.id }}
              onChange={(value) => {
                const selectedStudent = family.students?.find((student) => student.id === value);
                {
                  selectedStudent && dispatch(setSelectedStudent(selectedStudent));
                }
              }}
              className="text-title1 font-semibold text-mainBlue capitalize"
            />
          ) : (
            <div className="text-title1 font-semibold text-mainBlue capitalize">
              {selectedStudent.name}
            </div>
          )}
        </div>
        {/* <div className="my-6">
          <div className="flex space-x-1">
            {tabs.map((tab, index) => {
              return (
                <Link
                  href={tab.href}
                  key={tab.name}
                  className={cn(
                    'px-4 py-3 flex items-center space-x-2 hover:bg-mainBlue hover:bg-opacity-20 cursor-pointer rounded',
                    0 === index && 'bg-mainBlue bg-opacity-20'
                  )}>
                  <tab.icon width="24" height="24" fill="#666" />
                  <Typography variation="title3" className="text-dark">
                    {tab.name}
                  </Typography>
                </Link>
              );
            })}
          </div>
        </div> */}
      </div>
      {selectedStudent?.favouriteColleges[0] ? (
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {selectedStudent.favouriteColleges?.map((item) => {
            return <CollegeCard key={item.id} college={item.college} />;
          })}
        </div>
      ) : (
        <EmptyState
          title={
            students.length > 1
              ? 'No college is added in this student,Try with another student.'
              : 'No college is Added'
          }
        />
      )}
    </div>
  );
};

export default FavoritesPage;
