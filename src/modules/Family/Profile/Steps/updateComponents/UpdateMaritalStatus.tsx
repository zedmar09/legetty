import Button from '@components/Button/Button';
import Select from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { martialStatusOptions } from '@core/data/dropdownOptions';
import { MaritalStatus, Parent } from '@typings/model/family';
import { useState } from 'react';

interface UpdateMaritalStatusProps {
  maritalStatus: MaritalStatus;
  isLoading: boolean;
  onSave: (params: Partial<Parent>) => void;
}

const UpdateMaritalStatusIncome = (props: UpdateMaritalStatusProps) => {
  const { onSave, isLoading } = props;
  const [maritalStatus, setMaritalStatusIncome] = useState<MaritalStatus | null>(
    props.maritalStatus || null
  );

  const handelSubmit = () => {
    maritalStatus && onSave({ maritalStatus });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Marital Status
      </Typography>
      <div className="pb-6">
        <Select
          label="Marital Status"
          placeholder="Marital Status"
          value={maritalStatus}
          options={martialStatusOptions}
          // @ts-ignore
          onChange={setMaritalStatusIncome}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateMaritalStatusIncome;
