import Typography from '@components/Typography/Typography';
import { cn } from '@utils/style';
import { Field, useField } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type RadioItem = {
  label: string;
  value: string;
};

interface FormikTextInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string | JSX.Element;
  items: RadioItem[];
}

const FormikRadioGroup: React.FC<FormikTextInputProps> = (props) => {
  const { label, items, name, className = '', ...restProps } = props;
  const [field, meta, helpers] = useField(name as any);

  const hasError = meta.error && meta.touched;

  return (
    <div className={className}>
      <Typography variation="title2" className="font-bold mb-4">
        {label}
      </Typography>

      <div className="flex space-x-6">
        {items.map((item) => {
          const isChecked = field.value === item.value;

          return (
            <div key={item.value}>
              <label className="flex items-center p-2 cursor-pointer">
                <Field
                  type="radio"
                  name={name}
                  value={item.value}
                  checked={isChecked}
                  className="mr-2 hidden"
                />

                <div
                  className={cn(
                    'w-5 h-5 border rounded-full flex justify-center items-center border-[#1C1B1F]'
                  )}>
                  {isChecked && <div className="w-3 h-3 bg-[#1C1B1F] rounded-full" />}
                </div>

                <p className="text-base font-light text-green ml-1">{item.label}</p>
              </label>
            </div>
          );
        })}
      </div>
      {hasError && <p className="text-negativeAction text-sm font-normal mt-1">{meta.error}</p>}
    </div>
  );
};

export default FormikRadioGroup;
