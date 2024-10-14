import React, { useEffect, useState } from 'react';

import Button from '@components/Button/Button';
import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import Typography from '@components/Typography/Typography';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import Filter from '@modules/Family/Colleges/Search/Filter';
import FilterModal from '@modules/Family/Colleges/Search/FilterModal';
import ScoresSearch from '@modules/Family/Colleges/Search/ScoresSearch';
import SpecificCollegeSearch from '@modules/Family/Colleges/Search/SpecificCollegeSearch';
import { CollegeFilters } from '@typings/filters/college';
import { College } from '@typings/model/college';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SearchProps {}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

const SearchPage: React.FC<SearchProps> = (props) => {
  const {} = props;
  const [allColleges, setAllColleges] = useState<College[]>([]);
  const [filters, setFilters] = useState<CollegeFilters>({
    act: '',
    gpa: '',
    sat: '',
    state: '*',
    admission: 'Target',
    major_code: '',
    acceptance_rate_min: '',
    acceptance_rate_max: '',
    college_level: '',
    college_size_min: '',
    college_size_max: '',
    college_type: '',
  });
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState('scores');
  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);

  const router = useRouter();

  useEffect(() => {
    if (router.query.tab) {
      setCurrentTab(router.query.tab as string);
    } else {
      setCurrentTab('scores');
    }
  }, [router.query.tab]);

  const dispatch = useAppDispatch();

  const students = useAppSelector((state) => state.auth.family?.students);

  const studentsOptions =
    students?.map((student) => {
      return {
        label: student?.name,
        value: student?.id,
      };
    }) || [];

  useEffect(() => {
    if (router.query?.location) {
      setFilters((filters) => ({ ...filters, state: router.query.location as string }));
    }
    if (router.query.admission) {
      setFilters((filters) => ({ ...filters, admission: router.query.admission as string }));
    }
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>College Search</title>
      </Head>
      <FilterModal
        filters={filters}
        open={showFilter}
        setFilters={setFilters}
        setOpen={setShowFilter}
        setAllColleges={setAllColleges}
        currentTab={currentTab}
        allColleges={allColleges}
      />

      <div className="w-full h-full flex mt-[60px] pb-4 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-row lg:space-x-8 w-full">
          <div className="hidden md:inline-block w-2/5 ">
            <div className="sticky top-16 lg:top-24 min-h-[85vh] overflow-y-auto">
              <Filter
                filters={filters}
                setFilters={setFilters}
                currentTab={currentTab}
                setAllColleges={setAllColleges}
                allColleges={allColleges}
              />
            </div>
          </div>

          <div className="flex-grow w-full lg:px-0 px-8">
            <Button className="w-fit px-6 py-0 mb-10 md:hidden" onClick={() => setShowFilter(true)}>
              Filter
            </Button>
            <div className="flex flex-col lg:flex-row w-full lg:space-x-4 items-center">
              <div className="w-full flex flex-col">
                <div className="flex items-center space-x-2 w-full">
                  <Typography variation="title3" className="font-bold text-mainBlue">
                    College Search
                  </Typography>

                  <span>{'>'}</span>
                  {students?.length > 1 ? (
                    <SimpleDropdown
                      iconColor="#666666"
                      options={studentsOptions}
                      value={{ label: selectedStudent?.name + '', value: selectedStudent?.id }}
                      onChange={(value) => {
                        if (selectedStudent.id !== value) {
                          const selectedStudent = students?.find((student) => student.id === value);
                          selectedStudent && dispatch(setSelectedStudent(selectedStudent));
                        }
                      }}
                      className="text-title3"
                    />
                  ) : (
                    <div className="text-title3 capitalize">{selectedStudent?.name}</div>
                  )}
                </div>
                <Typography variation="title1" className="font-bold mt-2">
                  {selectedStudent?.name} - Starting College in{' '}
                  {Number(selectedStudent?.graduationYear) + 1}
                </Typography>
              </div>
              <div className="flex  items-center mt-4"></div>
            </div>

            {currentTab === 'scores' ? (
              <ScoresSearch filters={filters} allColleges={allColleges} />
            ) : (
              <SpecificCollegeSearch allColleges={allColleges} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
