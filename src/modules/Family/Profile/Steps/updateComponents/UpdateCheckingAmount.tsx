import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import Typography from '@components/Typography/Typography';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface UpdateCheckingAmountProps {
  checkingAmount: number | null;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdateCheckingAmount = (props: UpdateCheckingAmountProps) => {
  const { onSave, isLoading } = props;
  const [checkingAmount, setCheckingAmount] = useState<string | null | undefined>(
    props.checkingAmount?.toString() || null
  );

  const handelSubmit = () => {
    onSave({ checkingAmount: +checkingAmount });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Estimated value in checking/savings account, money markets etc.
      </Typography>

      <div className="pb-6">
        <CurrencyInput
          value={checkingAmount}
          label="Estimated value in checking account, savings account, money markets, etc."
          onTextChange={setCheckingAmount}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateCheckingAmount;
