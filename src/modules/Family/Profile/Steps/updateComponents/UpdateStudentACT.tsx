import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';
import Typography from '@components/Typography/Typography';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  act: number;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentACT = (props: Props) => {
  const { onSave, isLoading } = props;
  const [act, setAct] = useState(props.act || null);

  const handelSubmit = () => {
    act && onSave({ act: act });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update ACT Score
      </Typography>
      <div className="pb-6">
        <TextInput
          type="number"
          value={act?.toString()}
          label="ACT Score"
          onTextChange={(value) => setAct(+value)}
          max={36}
          min={0}
          step={0.1}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentACT;
