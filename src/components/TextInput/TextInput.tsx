import React from 'react';

export interface TextInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  labelClassName?: string;
  formatter?: (value: string, previousValue?: string) => string;
  onTextChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    label,
    name,
    disabled,
    className,
    inputClassName,
    formatter,
    labelClassName,
    ...restProps
  } = props;

  const handelChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.target.value;
    if (formatter && typeof formatter === 'function') {
      value = formatter(event.target.value);
    }

    if (restProps.max && event.target.value > restProps.max) {
      value = restProps.max.toString();
    }

    if (restProps.min && event.target.value < restProps.min) {
      value = restProps.min.toString();
    }
    restProps?.onTextChange?.(value.trim());
  };

  return (
    <div className={`${className}`}>
      <label className={`text-description1 text-darker block ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        disabled={disabled}
        className={`${
          disabled ? 'bg-lightest3 cursor-not-allowed' : 'bg-white cursor-pointer'
        }  border w-full border-lightest2 p-4 py-3 rounded-lg text-darker ${inputClassName}`}
        onChange={handelChange}
        {...restProps}
      />
    </div>
  );
};

export default TextInput;
