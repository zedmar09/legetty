import Button from '@components/Button/Button';
import TextInput from '@components/TextInput/TextInput';
import Typography from '@components/Typography/Typography';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  name: string;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentName = (props: Props) => {
  const { onSave, isLoading } = props;
  const [name, setName] = useState(props.name || undefined);

  const handelSubmit = () => {
    name && onSave({ name: name.trim() });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Student Name
      </Typography>
      <div className="pb-6">
        <TextInput value={name} label="Student name" onTextChange={(value) => setName(value)} />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentName;
