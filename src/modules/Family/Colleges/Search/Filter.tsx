import Button from '@components/Button/Button';
import ChevronDownIcon from '@components/Icons/ChevronDown';
import CloseIcon from '@components/Icons/CloseIcon';
import Select from '@components/Select/Select';
import TextInput from '@components/TextInput/TextInput';
import Typography from '@components/Typography/Typography';
import {
  acceptanceRateOptions,
  admissionOptions,
  collegeSizeOptions,
  collegeTypeOption,
  majorOptions,
} from '@core/data/dropdownOptions';
import { useAppSelector } from '@core/redux/store';
import { Disclosure } from '@headlessui/react';
import { CollegeFilters } from '@typings/filters/college';
import { College } from '@typings/model/college';
import { getStateName } from '@utils/state';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CollegeSearchCombobox from '../SpecificCollege/CollegeSearchCombobox';
import LocationModal from './LocationModal';
import SavedSearchModal from './SavedSearchModal';

const LocationBadge = (props: { location: string; onClick: () => void }) => {
  return (
    <div className="inline-flex items-center space-x-2 bg-flowKitGreen text-description1 px-4 py-1 rounded-full text-white mb-2 mr-2">
      <span>{props?.location}</span>
      <button onClick={props?.onClick}>
        <CloseIcon fill="#fff" height="20" width="20" />
      </button>
    </div>
  );
};

interface FilterProps {
  filters: CollegeFilters;
  setFilters: React.Dispatch<React.SetStateAction<CollegeFilters>>;
  currentTab: string;
  setAllColleges: React.Dispatch<React.SetStateAction<College[]>>;
  allColleges: College[];
}

const Filter: React.FC<FilterProps> = (props) => {
  const { filters, setFilters, currentTab, setAllColleges, allColleges } = props;
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const [savedSearchModalVisible, setSavedSearchModalVisible] = useState(false);
  const router = useRouter();

  const savedSearches = useAppSelector((state) => state.auth.savedSearches);
  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);

  let locationText = '';
  const locationArr = filters.state.split(',').filter((loc) => !!loc);

  if (!filters.state) {
    locationText = 'Select Location';
  } else if (filters.state === '*') {
    locationText = 'All States';
  } else {
    const locationArr = filters.state.split(',').filter((loc) => !!loc);
    if (locationArr.length === 1) {
      locationText = getStateName(locationArr[0]);
    } else {
      locationText = `${locationArr.length} States Selected`;
    }
  }

  const onBadgeCloseIconClick = (location: string) => {
    const locationArr = filters.state.split(',').filter((loc) => !!loc);
    if (locationArr.includes(location)) {
      const newLocation = locationArr?.filter((loc) => loc !== location);
      setFilters({ ...filters, state: newLocation.join(',') });
    } else {
      const newLocation = locationArr?.filter((loc) => loc !== location);
      setFilters({ ...filters, state: newLocation.join(',') });
    }
  };

  const tab = {
    scores: (
      <div className="mt-4">
        <div className="px-4">
          <Select
            name="admission"
            className="mt-4"
            label="Admission"
            value={filters.admission}
            options={admissionOptions}
            onChange={(value) => setFilters({ ...filters, admission: value })}
          />

          <div
            className="relative w-full cursor-pointer mt-4"
            onClick={() => setStateModalVisible(true)}>
            <div className="flex relative">
              <TextInput
                name="location"
                className="w-full"
                value={locationText}
                label="College Location"
                placeholder="Select Location"
                labelClassName="text-darker"
                inputClassName="!rounded-md !py-2.5 outline-none !text-dark"
              />
              <div className="absolute right-6 h-full mt-2.5 flex items-center">
                <ChevronDownIcon fill="#BFBFBF" />
              </div>
            </div>

            <div className="absolute inset-0" />
          </div>
          {locationArr?.length > 1 && (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Panel className="flex flex-wrap mt-5">
                    {locationArr?.map((loc) => (
                      <LocationBadge
                        key={loc}
                        location={getStateName(loc)}
                        onClick={() => onBadgeCloseIconClick(loc)}
                      />
                    ))}
                  </Disclosure.Panel>
                  {!open && (
                    <div className="mt-5">
                      {locationArr?.slice(0, 6)?.map((loc) => (
                        <LocationBadge
                          key={loc}
                          location={getStateName(loc)}
                          onClick={() => onBadgeCloseIconClick(loc)}
                        />
                      ))}
                    </div>
                  )}
                  <Disclosure.Button className="text-description1 text-mainBlue cursor-pointer">
                    <span>
                      {open
                        ? 'Show Less'
                        : `${
                            locationArr?.length - 6 > 0 ? `+${locationArr?.length - 6} More` : ''
                          } `}
                    </span>
                  </Disclosure.Button>
                </>
              )}
            </Disclosure>
          )}

          <div className="mt-4">
            <div className="flex justify-between">
              <Typography variation="description1">Select Major</Typography>
            </div>

            <Select
              name="major"
              placeholder="Select Major"
              className="w-full max-w-xs"
              value={filters.major_code || ''}
              options={majorOptions}
              onChange={(value) => {
                const majorTitle = majorOptions.find((item) => item.value === value)?.label;
                setFilters({ ...filters, major_code: value });
              }}
              isClearable
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <Typography variation="description1">Acceptance Rate</Typography>
            </div>

            <Select
              name="acceptanceRate"
              placeholder="Select Acceptance Rate"
              options={acceptanceRateOptions}
              onChange={(value) => {
                const minValue = value?.split('-')[0];
                const maxValue = value?.split('-')[1];
                setFilters({
                  ...filters,
                  acceptance_rate_min: minValue,
                  acceptance_rate_max: maxValue,
                });
              }}
              isClearable
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <Typography variation="description1">College Size</Typography>
            </div>

            <Select
              name="collegeSize"
              placeholder="Select College Size"
              options={collegeSizeOptions}
              onChange={(value) => {
                const minValue = value?.split('-')[0];
                const maxValue = value?.split('-')[1];
                setFilters({
                  ...filters,
                  college_size_min: minValue,
                  college_size_max: maxValue,
                });
              }}
              isClearable
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <Typography variation="description1">College Type</Typography>
              {/* <Link
                href="#"
                className="text-red hover:cursor-pointer text-sm"
                onClick={() => setFilters({ ...filters, college_type: '' })}>
                Reset
              </Link> */}
            </div>

            <Select
              name="collegeType"
              placeholder="Select College Type"
              options={collegeTypeOption}
              onChange={(value) =>
                setFilters({
                  ...filters,
                  college_type: value,
                })
              }
              isClearable
            />
          </div>

          {/* <Button
            className="mt-4 w-full"
            onClick={() =>
              setFilters({
                ...filters,
                major_code: '',
                acceptance_rate_min: '',
                acceptance_rate_max: '',
                college_size_min: '',
                college_size_max: '',
                college_type: '',
              })
            }>
            Reset All
          </Button> */}
        </div>
      </div>
    ),
    specific: (
      <div className="mt-4 text-description1">
        College
        <CollegeSearchCombobox
          multiSelect
          setAllColleges={setAllColleges}
          allColleges={allColleges}
        />
      </div>
    ),
  };

  return (
    <div className="bg-lightest4 py-8 px-4 rounded-2xl max-w-[450px] md:max-w-[320px] h-[85vh] overflow-auto">
      {stateModalVisible && (
        <LocationModal
          value={filters.state}
          onClose={() => setStateModalVisible(false)}
          onSelect={(value) => setFilters({ ...filters, state: value })}
        />
      )}

      {savedSearchModalVisible && (
        <SavedSearchModal onApply={setFilters} onClose={() => setSavedSearchModalVisible(false)} />
      )}
      <div className="flex space-x-2 bg-white p-2 rounded-2xl border border-lightest3">
        <Button
          className={`rounded-lg px-8 ${
            currentTab === 'scores' ? 'bg-mainBlue' : ' bg-white !text-mainBlue'
          }`}
          onClick={() => router.replace(`${router.pathname}?tab=scores`)}>
          Filter
        </Button>
        <Button
          className={`rounded-lg px-8 ${
            currentTab === 'specific' ? 'bg-mainBlue' : ' bg-white !text-mainBlue'
          }`}
          onClick={() => {
            setAllColleges([]);
            router.replace(`${router.pathname}?tab=specific`);
          }}>
          Specific College
        </Button>
      </div>
      {tab[currentTab]}
    </div>
  );
};

export default Filter;
