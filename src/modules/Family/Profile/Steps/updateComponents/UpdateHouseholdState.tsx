import Button from '@components/Button/Button';
import Select from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { states } from '@core/data/states';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface UpdateHouseholdStateProps {
  state: string;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdateHouseholdState: React.FC<UpdateHouseholdStateProps> = (props) => {
  const { onSave, isLoading } = props;
  const [state, setState] = useState<string | null>(props.state || null);

  const handelSubmit = () => {
    state && onSave({ state: state });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update State
      </Typography>
      <div className="pb-6">
        <Select
          name="state"
          value={String(state)}
          label="State"
          options={states}
          placeholder="Select State"
          onChange={setState}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateHouseholdState;
