import TextInput, { TextInputProps } from '@components/TextInput/TextInput';
import { useField } from 'formik';
import { ChangeEventHandler } from 'react';

interface FormikTextInputProps extends TextInputProps {
  name: string;
  formatter?: (value: string, previousValue?: string) => string;
  onTextChange?: (value: string | undefined) => void;
  labelClassName?: string;
}

const FormikTextInput: React.FC<FormikTextInputProps> = (props) => {
  const { name, className = '', formatter, onTextChange, ...restProps } = props;
  const [field, meta, helpers] = useField(name as any);

  const hasError = meta.error && meta.touched;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
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

    helpers.setValue(value);
    onTextChange?.(value);
  };

  return (
    <div className={className}>
      <TextInput {...field} {...restProps} onChange={handleChange} />
      {hasError && <p className="text-negativeAction text-sm font-normal mt-1">{meta.error}</p>}
    </div>
  );
};

export default FormikTextInput;
