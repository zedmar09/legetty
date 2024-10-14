import { useField } from 'formik';
import CurrencyInput from 'react-currency-input-field';

interface FormikTextInputProps {
  label: string;
  name: string;
  className?: string;
  formatter?: (value: string, previousValue?: string) => string;
  onTextChange?: (value: string) => void;
}

const FormikCurrencyInput: React.FC<FormikTextInputProps> = (props) => {
  const { name, label, className = '', formatter, onTextChange, ...restProps } = props;
  const [field, meta, helpers] = useField(name as any);

  const hasError = meta.error && meta.touched;

  const handleChange = (value: string | undefined) => {
    helpers.setValue(value);
    onTextChange?.(value);
  };

  return (
    <div className={className}>
      <label className="text-description1 text-darker block" htmlFor={name}>
        {label}
      </label>
      <CurrencyInput
        prefix="$"
        value={field.value}
        name="input-name"
        className="bg-white border w-full border-lightest2 p-4 py-3 rounded-lg "
        placeholder="$0.00"
        decimalsLimit={2}
        onValueChange={handleChange}
      />
      {hasError && <p className="text-negativeAction text-sm font-normal mt-1">{meta.error}</p>}
    </div>
  );
};

export default FormikCurrencyInput;
