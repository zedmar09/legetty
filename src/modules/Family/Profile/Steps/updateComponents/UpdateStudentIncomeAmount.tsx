import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  incomeAmount: number | null;
  isLoading: boolean;
  hasIncome: string;
  updateProfile: (params: Partial<Student>) => void;
}

const UpdateStudentIncomeAmount = (props: Props) => {
  const { updateProfile, isLoading } = props;
  const [incomeAmount, setIncomeAmount] = useState<string | null | undefined>(
    props.incomeAmount?.toString() || null
  );
  const [hasIncome, setHasIncome] = useState(props.hasIncome);

  const handelSubmit = () => {
    updateProfile({
      hasIncome: hasIncome === 'Yes',
      ...(hasIncome === 'Yes' && incomeAmount
        ? { incomeAmount: +incomeAmount }
        : { incomeAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Student Income?
      </Typography>
      <div className="pv-4">
        <div>Have Student Income?</div>
        <RadioGroup items={yesNoOptions} selectedValue={hasIncome} onChoose={setHasIncome} />
      </div>
      {hasIncome === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={incomeAmount}
            label="Income Amount"
            onTextChange={(text) => setIncomeAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentIncomeAmount;
