import DatePickerIcon from '@components/Icons/DatePickerIcon';
import Typography from '@components/Typography/Typography';
import format from 'date-fns/format';
import { useField } from 'formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormikDateInputProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  onSelect?: (value: string) => void;
}

const FormikDateInput: React.FC<FormikDateInputProps> = (props) => {
  const { label, name, placeholder, className, onSelect, ...restProps } = props;
  const [open, setOpen] = useState(false);
  const [field, meta, helpers] = useField(name as any);

  const hasError = meta.error && meta.touched;

  const handleChange = (date: Date) => {
    helpers.setValue(date.toISOString());
    setOpen(false);
  };

  return (
    <div className={className}>
      <Typography variation="description1" className="text-darker">
        {label}
      </Typography>
      <div className="relative cursor-pointer">
        <DatePicker
          value={field.value ? format(new Date(field.value), 'MMM do, yyyy') : undefined}
          open={open}
          onClickOutside={() => setOpen(false)}
          onCalendarOpen={() => setOpen(true)}
          onChange={handleChange}
          placeholderText={placeholder}
          wrapperClassName="border border-blue-500"
          className="border border-lightest px-4 py-3 rounded-lg w-full"
        />
        <div
          className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => setOpen(true)}>
          <DatePickerIcon />
        </div>
      </div>
      {hasError && <p className="text-negativeAction text-sm font-normal mt-1">{meta.error}</p>}
    </div>
  );
};

export default FormikDateInput;
