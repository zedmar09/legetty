import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';
import Typography from '@components/Typography/Typography';
import { Student } from '@typings/model/family';
import { ChangeEventHandler, useState } from 'react';

interface Props {
  gpa: number;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentGPA = (props: Props) => {
  const { onSave, isLoading } = props;
  const [gpa, setGpa] = useState(props.gpa?.toString() || null);

  const handelSubmit = () => {
    gpa && onSave({ gpa: +gpa });
  };

  const handelChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setGpa(event.target.value);
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update GPA Score
      </Typography>
      <div className="pb-6">
        <TextInput
          type="number"
          value={String(gpa)}
          label="GPA Score"
          onChange={handelChange}
          max={4}
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

export default UpdateStudentGPA;
