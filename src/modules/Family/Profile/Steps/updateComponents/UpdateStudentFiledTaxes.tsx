import Button from '@components/Button/Button';
import RadioGroup from '@components/RadioGroup/RadioGroup';
import Typography from '@components/Typography/Typography';
import { yesNoOptions } from '@core/data/dropdownOptions';
import { Student } from '@typings/model/family';
import { useState } from 'react';

interface Props {
  hasFiledTaxes: string;
  isLoading: boolean;
  onSave: (params: Partial<Student>) => void;
}

const UpdateStudentFiledTaxes = (props: Props) => {
  const { onSave, isLoading } = props;
  const [hasFiledTaxes, setHasFiledTaxes] = useState(props.hasFiledTaxes);

  const handelSubmit = () => {
    hasFiledTaxes && onSave({ hasFiledTaxes: hasFiledTaxes === 'Yes' });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Filed Taxes
      </Typography>
      <div className="pv-4">
        <div>Have Filed Taxes?</div>
        <RadioGroup
          items={yesNoOptions}
          selectedValue={hasFiledTaxes}
          onChoose={setHasFiledTaxes}
        />
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateStudentFiledTaxes;
