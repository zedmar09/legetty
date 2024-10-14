import Button from '@components/Button/Button';
import Select from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { familyInCollegeOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface UpdateAmountOfPeopleInCollegeProps {
  familyMembersInCollege: number;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdateAmountOfPeopleInCollege = (props: UpdateAmountOfPeopleInCollegeProps) => {
  const { isLoading, onSave } = props;
  const [familyMembersInCollegeCount, setFamilyMembersInCollegeCount] = useState(
    String(props.familyMembersInCollege)
  );

  const handelSave = () => {
    onSave({ familyMembersInCollege: +familyMembersInCollegeCount });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update number of people from household in college
      </Typography>
      <div className="pb-6">
        <Select
          label="Number of people from household in college"
          placeholder="no of people"
          value={familyMembersInCollegeCount}
          options={familyInCollegeOptions}
          onChange={setFamilyMembersInCollegeCount}
        />
      </div>
      <Button loading={isLoading} onClick={handelSave} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateAmountOfPeopleInCollege;
