import ChevronDownIcon from '@components/Icons/ChevronDown';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import React, { useEffect } from 'react';

interface DropdownProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
  iconColor?: string;
  onChange?: (value: string) => void;
  value?: {
    value: string;
    label: string;
  };
}

const SimpleDropdown: React.FC<DropdownProps> = (props) => {
  const { options, className, iconColor, onChange, value } = props;
  const [selectedOption, setSelectedOption] = React.useState(() => value);

  function onSelect({ key }: any) {
    setSelectedOption(key);
    onChange?.(key);
  }

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const menu = (
    <Menu className="max-h-52 overflow-y-auto !rounded-md" onSelect={onSelect}>
      {options?.map((option) => (
        <MenuItem
          key={option.value}
          className="mt-2 min-w-32 origin-top-left divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="group flex w-full items-center px-2 py-2 text-sm text-dark capitalize hover:bg-gray-100">
            {option.label}
          </div>
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
        <div className={`flex cursor-pointer items-center justify-between  ${className}`}>
          <span className="">{selectedOption?.label}</span> <ChevronDownIcon fill={iconColor} />
        </div>
      </Dropdown>
    </div>
  );
};

export default SimpleDropdown;
