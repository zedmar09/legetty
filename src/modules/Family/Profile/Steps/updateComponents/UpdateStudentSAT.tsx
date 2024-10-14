import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';
import Typography from '@components/Typography/Typography';
import { Student } from '@typings/model/family';
import { ChangeEventHandler, useState } from 'react';

interface Props {
  sat: number;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentSAT = (props: Props) => {
  const { onSave, isLoading } = props;
  const [sat, setSat] = useState(props.sat.toString() || null);

  const handelSubmit = () => {
    sat && onSave({ sat: +sat });
  };

  const handelChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSat(event.target.value);
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update SAT Score
      </Typography>
      <div className="pb-6">
        <TextInput
          type="number"
          value={String(sat)}
          label="SAT Score"
          onChange={handelChange}
          max={1600}
          min={0}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentSAT;
