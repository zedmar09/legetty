import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { getYesNoValue } from '@utils/common';
import { useState } from 'react';

interface Props {
  ownsInvestmentProperty: boolean;
  investmentEquity: string | null;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdatePropertyOwnership = (props: Props) => {
  const { onSave, isLoading } = props;
  const [investmentEquity, setInvestmentEquity] = useState<string | null | undefined>(
    props.investmentEquity || null
  );
  const [ownsInvestmentProperty, setOwnsInvestmentProperty] = useState(
    getYesNoValue(props.ownsInvestmentProperty)
  );

  const handelSubmit = () => {
    onSave({
      ownsInvestmentProperty: ownsInvestmentProperty === 'Yes',
      ...(ownsInvestmentProperty === 'Yes' && investmentEquity
        ? { investmentEquity: +investmentEquity }
        : { investmentEquity: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update investment residence
      </Typography>
      <div className="pv-4">
        <div>Do you have investment residence?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={String(ownsInvestmentProperty)}
          onChoose={setOwnsInvestmentProperty}
        />
      </div>
      {ownsInvestmentProperty === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={investmentEquity}
            label="How much estimated equity do you hold in all across the properties?"
            onTextChange={setInvestmentEquity}
          />
        </div>
      )}
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdatePropertyOwnership;
