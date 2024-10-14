import Button from '@components/Button/Button';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import Select from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { filingStatusOptions, standardDeductionMapping } from '@core/data/dropdownOptions';
import { FilingStatus, Parent } from '@typings/model/family';
import { usdFormatter } from '@utils/common';
import { useState } from 'react';

interface Props {
  annualIncome: number;
  filingStatus: FilingStatus;
  standardDeduction: number;
  taxableIncome: number;
  isLoading: boolean;
  onSave: (params: Partial<Parent>) => void;
}

const UpdateAnnualIncome = (props: Props) => {
  const { onSave, isLoading } = props;
  const [annualIncome, setAnnualIncome] = useState<string | undefined | null>(
    props.annualIncome?.toString() || null
  );
  const [filingStatus, setFilingStatus] = useState<FilingStatus>(props.filingStatus || null);
  const [standardDeduction, setStandardDeduction] = useState<string | undefined | null>(
    props.standardDeduction?.toString() || null
  );
  const [taxableIncome, setTaxableIncome] = useState<string | undefined | null>(
    props.taxableIncome?.toString() || null
  );

  const handelSubmit = () => {
    annualIncome &&
      onSave({
        annualIncome: +annualIncome,
        filingStatus,
        standardDeduction: +standardDeduction,
        taxableIncome: +taxableIncome,
      });
  };

  return (
    <div className="p-8 space-y-4">
      <Typography variation="title2" className="font-bold">
        Update Annual Income
      </Typography>

      <div className="pb-6">
        <CurrencyInput
          value={annualIncome}
          label="Annual income"
          onTextChange={(value) => {
            setAnnualIncome(value);
            if (standardDeduction) {
              const taxableIncome = +value - +standardDeduction;
              setTaxableIncome(taxableIncome.toString());
            }
          }}
        />

        <Select
          className="mt-4"
          value={filingStatus}
          label="Filing Status"
          onChange={(filingStatus: FilingStatus) => {
            setFilingStatus(filingStatus);
            const taxableIncome = +annualIncome - +standardDeduction;
            setStandardDeduction(standardDeductionMapping[filingStatus].toString());
            setTaxableIncome(taxableIncome.toString());
          }}
          options={filingStatusOptions}
          placeholder="Select filing Status"
        />

        <CurrencyInput
          className="my-6"
          value={standardDeduction}
          label="Estimated Tax Paid"
          onTextChange={(standardDeduction) => {
            setStandardDeduction(standardDeduction);
            const taxableIncome = +annualIncome - +standardDeduction;
            setTaxableIncome(taxableIncome.toString());
          }}
        />

        <div className="p-4 rounded-lg bg-lightest4 mt-8 divide-y divide-gray-400">
          <div className="flex justify-between items-center py-2">
            <div className="">Taxable Income</div>
            <div className="font-semibold">
              {+taxableIncome > 0 ? usdFormatter.format(+taxableIncome) : usdFormatter.format(0)}
            </div>
          </div>
        </div>
      </div>
      <Button loading={isLoading} onClick={handelSubmit} className="w-full">
        Save
      </Button>
    </div>
  );
};

export default UpdateAnnualIncome;
