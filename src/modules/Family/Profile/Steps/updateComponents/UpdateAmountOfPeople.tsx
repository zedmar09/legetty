import Button from '@components/Button/Button';
import Select from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { familyOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface UpdateHouseholdStateProps {
  familyMembersCount: number;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdateAmountOfPeople = (props: UpdateHouseholdStateProps) => {
  const { isLoading, onSave } = props;
  const [familyMembersCount, setFamilyMembersCount] = useState(String(props.familyMembersCount));

  const handelSave = () => {
    onSave({ familyMembersCount: +familyMembersCount });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Amount of People
      </Typography>
      <div className="pb-6">
        <Select
          label="Number of people in household"
          placeholder="no of people"
          value={familyMembersCount}
          options={familyOptions}
          onChange={setFamilyMembersCount}
        />
      </div>
      <Button loading={isLoading} onClick={handelSave} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateAmountOfPeople;
