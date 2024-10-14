import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  taxableBrokerageAccountsAmount: number;
  hasTaxableBrokerageAccounts: string;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdateTaxableBrokerage = (props: Props) => {
  const { onSave, isLoading } = props;
  const [taxableBrokerageAccountsAmount, setTaxableBrokerageAccountsAmount] = useState<
    string | undefined | null
  >(props.taxableBrokerageAccountsAmount?.toString() || null);

  const [hasTaxableBrokerageAccounts, setHasTaxableBrokerageAccounts] = useState(
    props.hasTaxableBrokerageAccounts
  );

  const handelSubmit = () => {
    onSave({
      hasTaxableBrokerageAccounts: hasTaxableBrokerageAccounts === 'Yes',
      ...(hasTaxableBrokerageAccounts === 'Yes' && taxableBrokerageAccountsAmount
        ? { taxableBrokerageAccountsAmount: +taxableBrokerageAccountsAmount }
        : { taxableBrokerageAccountsAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update taxable brokerage accounts
      </Typography>

      <div className="pv-4">
        <div>Have any taxable brokerage accounts?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasTaxableBrokerageAccounts}
          onChoose={setHasTaxableBrokerageAccounts}
        />
      </div>
      {hasTaxableBrokerageAccounts === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={taxableBrokerageAccountsAmount}
            label="taxable brokerage accounts"
            onTextChange={(text) => setTaxableBrokerageAccountsAmount(text)}
          />
        </div>
      )}
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateTaxableBrokerage;
