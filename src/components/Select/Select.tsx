import Typography from '@components/Typography/Typography';
import { cn } from '@utils/style';
import React from 'react';
import ReactSelect, { Props } from 'react-select';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Props {
  value?: string;
  label?: string;
  options?: SelectOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  errorMessage?: string;
  labelClassNames?: string;
  inputClass?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const {
    value,
    label,
    placeholder,
    options,
    onChange,
    errorMessage,
    className,
    labelClassNames,
    inputClass,
    ...restProps
  } = props;

  const handleChange = (option: SelectOption) => {
    onChange?.(option?.value);
  };

  return (
    <div className={className}>
      <Typography variation="description1" className={cn('text-darker', labelClassNames)}>
        {label}
      </Typography>
      <ReactSelect
        options={options}
        value={options?.find((option) => option.value === value)}
        onChange={handleChange}
        placeholder={placeholder}
        classNames={{
          input: () => '!p-0 text-[14px]',
          control: () => `px-4 py-1 ${inputClass}`,
          valueContainer: () => '!p-0',
          option: (props) =>
            cn(
              '!text-darker !cursor-pointer z-50',
              props.isSelected && '!bg-mainBlue !text-white',
              !props?.isFocused && props?.isSelected && '!bg-mainBlue !text-white',
              props.isFocused && !props.isSelected && '!bg-[#f1f5f9] !text-darker'
            ),
        }}
        components={{ IndicatorSeparator: () => null }}
        {...restProps}
      />
      {errorMessage && (
        <p className="text-negativeAction text-sm font-normal mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;
