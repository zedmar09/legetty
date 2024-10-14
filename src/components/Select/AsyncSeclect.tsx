import Typography from '@components/Typography/Typography';
import { cn } from '@utils/style';
import React, { useState } from 'react';
import { Props } from 'react-select';
import { AsyncPaginate } from 'react-select-async-paginate';

export interface SelectOption {
  label: string;
  value: string;
}

export interface AsyncSelectProps extends Props {
  label?: string;
  options?: SelectOption[];
  className?: string;
  errorMessage?: string;
  labelClassNames?: string;
  inputClass?: string;
  loadOptions: any;
  placeholder?: string;
  isMulti?: boolean;
  value?: any;
  onChange: (selectedOption: any) => void;
}

const AsyncSelect: React.FC<AsyncSelectProps> = (props) => {
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
    loadOptions,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (option: SelectOption) => {
    onChange?.(option.value);
  };

  return (
    <div className={className}>
      <Typography variation="description1" className={cn('text-darker', labelClassNames)}>
        {label}
      </Typography>
      <AsyncPaginate
        loadOptions={loadOptions}
        inputValue={inputValue}
        onInputChange={(value, action) => {
          setInputValue(value);
        }}
        additional={{
          page: 1,
        }}
        placeholder={placeholder}
        onChange={handleChange}
        {...restProps}
      />
      {errorMessage && (
        <p className="text-negativeAction text-sm font-normal mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default AsyncSelect;
