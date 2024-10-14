import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { Family, PrimaryResidence } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  primaryResidence: string;
  residenceEquity: number | null;
  isLoading: boolean;
  onSave: (params: Partial<Family>) => void;
}

const UpdateProfileResidence = (props: Props) => {
  const { onSave, isLoading } = props;
  const [residenceEquity, setResidenceEquity] = useState<string | undefined | null>(
    props.residenceEquity?.toString() || null
  );
  const [primaryResidence, setPrimaryResidence] = useState(props.primaryResidence);

  const handelSubmit = () => {
    onSave({
      primaryResidence: primaryResidence as PrimaryResidence,
      ...(primaryResidence === 'Own' && residenceEquity
        ? { residenceEquity: +residenceEquity }
        : { residenceEquity: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Profile Residence
      </Typography>
      <div className="pv-4">
        <div>Do you own or rent your primary residence?</div>
        <RadioGroup
          items={[
            {
              label: 'Own',
              value: 'Own',
            },
            {
              label: 'Rent',
              value: 'Rent',
            },
          ]}
          selectedValue={primaryResidence}
          onChoose={setPrimaryResidence}
        />
      </div>
      {primaryResidence === 'Own' && (
        <div className="pb-6">
          <CurrencyInput
            value={residenceEquity}
            label="Profile Residence amount"
            onTextChange={setResidenceEquity}
          />
        </div>
      )}
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateProfileResidence;
