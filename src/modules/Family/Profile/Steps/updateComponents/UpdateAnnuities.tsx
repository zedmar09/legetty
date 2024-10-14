import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  annuitiesAmount: number | null;
  isLoading: boolean;
  hasAnnuities: string;
  updateProfile: (params: Partial<Family>) => void;
}

const UpdateAnnuities = (props: Props) => {
  const { updateProfile, isLoading } = props;
  const [annuitiesAmount, setAnnuitiesAmount] = useState<string | null | undefined>(
    props.annuitiesAmount?.toString() || null
  );
  const [hasAnnuities, setHasAnnuities] = useState(props.hasAnnuities);

  const handelSubmit = () => {
    updateProfile({
      hasAnnuities: hasAnnuities === 'Yes',
      ...(hasAnnuities === 'Yes' && annuitiesAmount
        ? { annuitiesAmount: +annuitiesAmount }
        : { annuitiesAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Annuities?
      </Typography>
      <div className="pv-4">
        <div>Own annuities?</div>
        <RadioGroup items={yesNoOptions} selectedValue={hasAnnuities} onChoose={setHasAnnuities} />
      </div>
      {hasAnnuities === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={annuitiesAmount}
            label="Annuities Amount"
            onTextChange={(text) => setAnnuitiesAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateAnnuities;
