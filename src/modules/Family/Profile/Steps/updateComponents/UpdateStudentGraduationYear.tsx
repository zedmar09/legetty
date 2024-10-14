import Button from '@components/Button/Button';
import Select from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { graduationYearOptions } from '@core/data/dropdownOptions';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  graduationYear: string;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentGraduationYear = (props: Props) => {
  const { onSave, isLoading } = props;
  const [graduationYear, setGraduationYear] = useState(props.graduationYear || null);

  const handelSubmit = () => {
    graduationYear && onSave({ graduationYear: graduationYear });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Graduation Year
      </Typography>
      <div className="pb-6">
        <Select
          value={graduationYear as string}
          label="Graduation Year"
          options={graduationYearOptions}
          placeholder="Graduation Year"
          onChange={setGraduationYear}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentGraduationYear;
