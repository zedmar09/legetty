import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  collegeSavingAccountsAmount: number | null;
  isLoading: boolean;
  hasCollegeSavingsAccounts: string;
  onSave: (params: Partial<Family>) => void;
}

const UpdateCollegeSavingAccountsAmount = (props: Props) => {
  const { onSave, isLoading } = props;
  const [collegeSavingAccountsAmount, setCollegeSavingAccountsAmount] = useState<
    string | null | undefined
  >(props.collegeSavingAccountsAmount?.toString() || null);
  const [hasCollegeSavingsAccounts, setHasCollegeSavingsAccounts] = useState(
    props.hasCollegeSavingsAccounts
  );

  const handelSubmit = () => {
    onSave({
      hasCollegeSavingsAccounts: hasCollegeSavingsAccounts === 'Yes',
      ...(hasCollegeSavingsAccounts === 'Yes' && collegeSavingAccountsAmount
        ? { collegeSavingsAccountsAmount: +collegeSavingAccountsAmount }
        : { collegeSavingsAccountsAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update have any college savings accounts
      </Typography>
      <div className="pv-4">
        <div>Have any college savings accounts?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasCollegeSavingsAccounts}
          onChoose={setHasCollegeSavingsAccounts}
        />
      </div>
      {hasCollegeSavingsAccounts === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={collegeSavingAccountsAmount}
            label="College savings accounts"
            onTextChange={(text) => setCollegeSavingAccountsAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateCollegeSavingAccountsAmount;
