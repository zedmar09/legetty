import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  insuranceAmount: number | null;
  isLoading: boolean;
  hasLifeInsuranceAccount: string;
  updateProfile: (params: Partial<Family>) => void;
}

const UpdateLifeInsuranceAccount = (props: Props) => {
  const { updateProfile, isLoading } = props;
  const [insuranceAmount, setInsuranceAmount] = useState<string | null | undefined>(
    props.insuranceAmount?.toString() || null
  );
  const [hasLifeInsuranceAccount, setHasLifeInsuranceAccount] = useState(
    props.hasLifeInsuranceAccount
  );

  const handelSubmit = () => {
    updateProfile({
      hasLifeInsuranceAccount: hasLifeInsuranceAccount === 'Yes',
      ...(hasLifeInsuranceAccount === 'Yes' && insuranceAmount
        ? { insuranceAmount: +insuranceAmount }
        : { insuranceAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update cash value life insurance accounts?
      </Typography>
      <div className="pv-4">
        <div>Have cash value life insurance accounts?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasLifeInsuranceAccount}
          onChoose={setHasLifeInsuranceAccount}
        />
      </div>
      {hasLifeInsuranceAccount === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={insuranceAmount}
            label="Insurance Amount"
            onTextChange={(text) => setInsuranceAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateLifeInsuranceAccount;
