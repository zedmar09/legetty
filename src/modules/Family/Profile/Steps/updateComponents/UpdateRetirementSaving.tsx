import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Family } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  annualRetirementAmount: number | null;
  isLoading: boolean;
  retirementPlan: string;
  onSave: (params: Partial<Family>) => void;
}

const UpdateRetirementSaving = (props: Props) => {
  const { onSave, isLoading } = props;
  const [annualRetirementAmount, setAnnualRetirementAmount] = useState<string | null | undefined>(
    props.annualRetirementAmount?.toString() || null
  );
  const [retirementPlan, setRetirementPlan] = useState(props.retirementPlan);

  const handelSubmit = () => {
    onSave({
      retirementPlan: retirementPlan === 'Yes',
      ...(retirementPlan === 'Yes' && annualRetirementAmount
        ? { annualRetirementAmount: +annualRetirementAmount }
        : { annualRetirementAmount: null }),
    });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Qualified retirement plan
      </Typography>
      <div className="pv-4">
        <div>Have qualified retirement plan</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={retirementPlan}
          onChoose={setRetirementPlan}
        />
      </div>
      {retirementPlan === 'Yes' && (
        <div className="pb-6">
          <CurrencyInput
            value={String(annualRetirementAmount)}
            label="Qualified retirement plan"
            onTextChange={(text) => setAnnualRetirementAmount(text)}
          />
        </div>
      )}

      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateRetirementSaving;
