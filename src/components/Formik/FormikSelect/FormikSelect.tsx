// TODO: Use <Select /> from components/Select

import { SelectOption, SelectProps } from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { cn } from '@utils/style';
import { useField } from 'formik';
import Select from 'react-select';

interface FormikSelectProps extends SelectProps {
  label: string;
  name: string;
  className?: string;
  isSearchable?: boolean;
  onSelect?: (value: string) => void;
  labelClassNames?: string;
  showErrorMessage?: boolean;
}

const FormikSelect: React.FC<FormikSelectProps> = (props) => {
  const {
    label,
    name,
    options,
    placeholder,
    className,
    isSearchable = false,
    showErrorMessage = true,
    labelClassNames,
    onSelect,
    ...restProps
  } = props;
  const [field, meta, helpers] = useField(name);

  const hasError = meta.error && meta.touched;

  const handleChange = (option: SelectOption) => {
    helpers?.setValue(option.value);
    onSelect?.(option.value);
  };

  return (
    <div className={className}>
      <Typography variation="description1" className={cn('text-darker', labelClassNames)}>
        {label}
      </Typography>
      {/* TODO: User <Select /> from components/Select */}
      <div className={`${hasError && 'ring-2 ring-red-500 rounded'}`}>
        <Select
          isSearchable={isSearchable}
          options={options}
          value={options?.find((option) => option.value === field.value)}
          onChange={handleChange}
          placeholder={placeholder}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999999999 }) }}
          classNames={{
            input: () => `!p-0 text-[14px]`,
            control: () => 'px-4 py-1 !cursor-pointer !border',
            valueContainer: () => '!p-0',
            indicatorsContainer: () => 'h-10',
            option: (props) =>
              `!text-darker hover:!text-white hover:bg-mainBlue !cursor-pointer ${
                (props?.isFocused || props?.isSelected) && '!bg-mainBlue !text-white'
              }`,
          }}
          components={{ IndicatorSeparator: () => null }}
          // {...field}
          // {...restProps}
        />
      </div>
      {showErrorMessage && hasError && (
        <p className="text-negativeAction text-sm font-normal mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default FormikSelect;
