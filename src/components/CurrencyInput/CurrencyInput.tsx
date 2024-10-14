import NativeCurrencyInput from 'react-currency-input-field';

interface CurrencyInputProps {
  label: string;
  name?: string;
  className?: string;
  value: string;
  formatter?: (value: string, previousValue?: string) => string;
  onTextChange?: (value: string | undefined) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = (props) => {
  const { name, label, className = '', value, formatter, onTextChange, ...restProps } = props;

  return (
    <div className={className}>
      <label className="text-description1 text-darker block" htmlFor={name || label}>
        {label}
      </label>
      <NativeCurrencyInput
        prefix="$"
        value={value}
        name={name || label}
        className="bg-white border w-full border-lightest2 p-4 py-3 rounded-lg "
        placeholder="$0.00"
        decimalsLimit={2}
        onValueChange={onTextChange}
        {...restProps}
      />
    </div>
  );
};

export default CurrencyInput;
