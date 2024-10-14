import Typography from '@components/Typography/Typography';
import { cn } from '@utils/style';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type RadioItem = {
  label: string;
  value: string;
};

interface RadioGroupParams
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string | JSX.Element;
  items: RadioItem[];
  selectedValue: string;
  onChoose: (data: string) => void;
}

const RadioGroup: React.FC<RadioGroupParams> = (props) => {
  const { label, items, name, className = '', selectedValue, onChoose, ...restProps } = props;

  const handelChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChoose(e.target.value);
  };

  return (
    <div className={className}>
      <Typography variation="title2" className="font-bold mb-4">
        {label}
      </Typography>

      <div className="flex space-x-6">
        {items.map((item) => {
          const isChecked = selectedValue === item.value;

          return (
            <div key={item.value}>
              <label className="flex items-center p-2 cursor-pointer">
                <input
                  type="radio"
                  name={name}
                  value={item.value}
                  checked={isChecked}
                  className="mr-2 hidden"
                  onChange={handelChange}
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
    </div>
  );
};

export default RadioGroup;
