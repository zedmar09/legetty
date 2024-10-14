import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  businessAssetsAmount: number | null;
  isLoading: boolean;
  hasBusinessAssets: string;
  updateProfile: (params: Partial<Family>) => void;
}

const UpdateBusinessAssets = (props: Props) => {
  const { updateProfile, isLoading } = props;
  const [businessAssetsAmount, setBusinessAssetsAmount] = useState<string | null | undefined>(
    props.businessAssetsAmount?.toString() || null
  );
  const [hasBusinessAssets, setHasBusinessAssets] = useState(props.hasBusinessAssets);

  const handelSubmit = () => {
    updateProfile({
      hasBusinessAssets: hasBusinessAssets === 'Yes',
      ...(hasBusinessAssets === 'Yes' && businessAssetsAmount
        ? { businessAssetsAmount: +businessAssetsAmount }
        : { businessAssetsAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update cash value life insurance accounts?
      </Typography>
      <div className="pv-4">
        <div>Have cash value life insurance accounts</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasBusinessAssets}
          onChoose={setHasBusinessAssets}
        />
      </div>
      {hasBusinessAssets === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={businessAssetsAmount}
            label="Business Assets Amounts"
            onTextChange={(text) => setBusinessAssetsAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateBusinessAssets;
