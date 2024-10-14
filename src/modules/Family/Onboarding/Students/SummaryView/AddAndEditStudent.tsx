import TextInput from '@components/TextInput/TextInput';
import { OnboardingStudent } from '@typings/onboarding';
import React, { useEffect, useState } from 'react';

interface Props {
  selectedData?: OnboardingStudent;
  setAddAndEditValue: React.Dispatch<React.SetStateAction<string>>;
}

const AddAndEditStudent = (props: Props) => {
  const { setAddAndEditValue, selectedData } = props;
  const [value, setValue] = useState<String | null>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    setAddAndEditValue(e.target.value);
  };

  useEffect(() => {
    if (selectedData) {
      setValue(selectedData?.name);
    }
  }, [selectedData?.name]);

  return (
    <div>
      <div className="flex flex-col w-full">
        <TextInput
          label="Student's Name"
          placeholder="Student's name"
          className="flex-1 w-full "
          value={value as string}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddAndEditStudent;
