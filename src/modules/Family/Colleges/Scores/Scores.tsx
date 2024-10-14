import Button from '@components/Button/Button';
import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import ChevronDownIcon from '@components/Icons/ChevronDown';
import Select from '@components/Select/Select';
import TextInput from '@components/TextInput/TextInput';
import { admissionOptions } from '@core/data/dropdownOptions';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { getStateName } from '@utils/state';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LocationModal from '../Search/LocationModal';
interface ScoresProps {}

const Scores: React.FC<ScoresProps> = (props) => {
  const {} = props;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [locations, setLocations] = useState('*');
  const [gpaSelected, setGpaSelected] = useState(false);
  const [satSelected, setSatSelected] = useState(false);
  const [actSelected, setActSelected] = useState(false);
  const [admission, setAdmission] = useState(admissionOptions[0].value);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const students = useAppSelector((state) => state.auth.family?.students);
  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);

  const studentsOptions = students?.map((student) => {
    return {
      label: student?.name,
      value: student?.id,
    };
  });

  const handleSearch = () => {
    router.push(
      `/family/college/search?tab=scores&location=${locations}&admission=${admission}&gpa=${
        gpaSelected ? '1' : '0'
      }&sat=${satSelected ? '1' : '0'}&act=${actSelected ? '1' : '0'}`
    );
  };

  // TODO: Make a utility function
  let locationText = '';

  if (!locations) {
    locationText = 'Select Location';
  } else if (locations === '*') {
    locationText = 'All States';
  } else {
    const locationArr = locations.split(',').filter((loc) => !!loc);
    if (locationArr.length === 1) {
      locationText = getStateName(locationArr[0]);
    } else {
      locationText = `${locationArr.length} States Selected`;
    }
  }

  return (
    <div>
      {locationModalVisible && (
        <LocationModal
          value={locations}
          onSelect={setLocations}
          onClose={() => setLocationModalVisible(false)}
        />
      )}
      <div className="pt-10 bg-white">
        <div className="max-w-[680px] mx-auto px-8 md:px-0">
          <div className="p-6 bg-mainBlue rounded-lg text-white">
            <div className="flex flex-col sm:flex-row justify-between pb-4 border-b-[0.2px] border-opacity-50 border-white">
              <div className="flex space-x-2 items-center pb-4">
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
              <div className="flex flex-col xs:flex-row xs:items-center space-y-2 xs:space-y-0 space-x-2 sm:space-x-6">
                <div className="flex items-center text-xs">
                  <input
                    id="gpa"
                    type="checkbox"
                    checked={gpaSelected}
                    className="accent-white"
                    onChange={(event) => setGpaSelected(event.target.checked)}
                  />
                  <label className="ml-2" htmlFor="gpa">
                    GPA - {selectedStudent?.gpa}
                  </label>
                </div>

                <div className="flex items-center text-xs">
                  <input
                    id="sat"
                    type="checkbox"
                    checked={satSelected}
                    className="accent-white"
                    onChange={(event) => setSatSelected(event.target.checked)}
                  />
                  <label className="ml-2" htmlFor="sat">
                    SAT - {selectedStudent?.sat}
                  </label>
                </div>

                <div className="flex items-center text-xs">
                  <input
                    id="act"
                    type="checkbox"
                    checked={actSelected}
                    className="accent-white"
                    onChange={(event) => setActSelected(event.target.checked)}
                  />
                  <label className="ml-2" htmlFor="act">
                    ACT - {selectedStudent?.act}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between  space-y-2 sm:space-y-0  sm:space-x-6 mt-4 ">
              <Select
                value={admission}
                name="admission"
                label="Admission"
                className="w-full"
                onChange={setAdmission}
                options={admissionOptions}
                labelClassNames="text-white"
              />

              <div
                className="relative w-full cursor-pointer"
                onClick={() => setLocationModalVisible(true)}>
                <div className="flex relative">
                  <TextInput
                    name="location"
                    className="w-full"
                    value={locationText}
                    label="College Location"
                    placeholder="Select Location"
                    labelClassName="text-white"
                    inputClassName="!rounded-md !py-2.5 outline-none"
                  />
                  <div className="absolute right-6 flex h-full mt-2.5 items-center">
                    <ChevronDownIcon fill="#BFBFBF" />
                  </div>
                </div>
                <div className="absolute inset-0" />
              </div>

              <Button
                onClick={handleSearch}
                className="!bg-white font-semibold h-fit rounded-lg !pt-[12px] !px-12 sm:!mt-5">
                <span className="text-mainBlue">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
