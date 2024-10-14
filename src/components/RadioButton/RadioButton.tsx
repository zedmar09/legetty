import { cn } from '@utils/style';
import React from 'react';

interface RadioButtonProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { label, checked, onChange } = props;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(!event.target.checked);
  };

  return (
    <label className="flex items-center cursor-pointer p-2">
      <input type="radio" onChange={handleChange} checked={checked} className="mr-2 hidden" />

      <div
        className={cn(
          'w-5 h-5 border rounded-full flex justify-center items-center border-mainBlue'
        )}>
        {checked && <div className="w-3 h-3 bg-mainBlue rounded-full" />}
      </div>

      <p className="text-base font-light text-green ml-1">{label}</p>
    </label>
  );
};

export default RadioButton;
