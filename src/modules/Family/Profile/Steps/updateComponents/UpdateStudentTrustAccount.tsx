import Button from '@components/Button/Button';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  hasTrustAccount: string;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentTrustAccount = (props: Props) => {
  const { onSave, isLoading } = props;
  const [hasTrustAccount, setHasTrustAccount] = useState(props.hasTrustAccount);

  const handelSubmit = () => {
    hasTrustAccount && onSave({ hasTrustAccount: hasTrustAccount === 'Yes' });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Student Trusted Account
      </Typography>
      <div className="pv-4">
        <div>Have Student Trusted Account?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasTrustAccount}
          onChoose={setHasTrustAccount}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentTrustAccount;
