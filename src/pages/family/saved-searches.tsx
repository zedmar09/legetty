import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import Typography from '@components/Typography/Typography';
import { tabs } from '@core/config/tabs';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { cn } from '@utils/style';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

interface SaveSearchProps {}

const SaveSearch: React.FC<SaveSearchProps> = (props) => {
  const dispatch = useAppDispatch();

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
    <div className="max-w-7xl mx-auto px-16 py-8">
      <Head>
        <title>Saved Search</title>
      </Head>
      <div>
        <div className="flex">
          <SimpleDropdown
            iconColor="#2174BB"
            options={studentsOptions}
            value={{ label: selectedStudent?.name + '', value: selectedStudent?.id }}
            onChange={(value) => {
              const selectedStudent = students?.find((student) => student.id === value);
              if (selectedStudent) {
                dispatch(setSelectedStudent(selectedStudent));
              }
            }}
            className="text-title1 font-semibold text-mainBlue"
          />
        </div>
        <div className="my-6">
          <div className="flex space-x-1">
            {tabs.map((tab, index) => {
              return (
                <Link
                  href={tab.href}
                  key={tab.name}
                  className={cn(
                    'px-4 py-3 flex items-center space-x-2 hover:bg-mainBlue hover:bg-opacity-20 cursor-pointer rounded',
                    2 === index && 'bg-mainBlue bg-opacity-20'
                  )}>
                  <tab.icon width="24" height="24" fill="#666" />
                  <Typography variation="title3" className="text-dark">
                    {tab.name}
                  </Typography>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16 rounded text-center">
        <h3>Work in progress</h3>
      </div>
    </div>
  );
};

export default SaveSearch;
