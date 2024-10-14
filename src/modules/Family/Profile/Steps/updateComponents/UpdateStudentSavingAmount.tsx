import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  isLoading: boolean;
  savingsAmount: number | null;
  hasSavingsAccount: string;
  updateProfile: (params: Partial<Student>) => void;
}

const UpdateStudentSavingAmount = (props: Props) => {
  const { updateProfile, isLoading } = props;
  const [savingsAmount, setSavingsAmount] = useState<string | null | undefined>(
    props.savingsAmount?.toString() || null
  );
  const [hasSavingsAccount, setHasSavingsAccount] = useState(props.hasSavingsAccount);

  const handelSubmit = () => {
    updateProfile({
      hasSavingsAccount: hasSavingsAccount === 'Yes',
      ...(hasSavingsAccount === 'Yes' && savingsAmount
        ? { savingsAmount: +savingsAmount }
        : { savingsAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Student Savings Account?
      </Typography>
      <div className="pv-4">
        <div>Have Student Saving Account?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasSavingsAccount}
          onChoose={setHasSavingsAccount}
        />
      </div>
      {hasSavingsAccount === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={savingsAmount}
            label="Student Saving Amount"
            onTextChange={(text) => setSavingsAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentSavingAmount;
