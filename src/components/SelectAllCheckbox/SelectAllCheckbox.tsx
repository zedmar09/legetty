import React, { useMemo } from 'react';

interface SelectAllCheckboxProps {
  selectedRows: string;
  onSelect?: (selectedRows: string) => void;
  rowsCount: number;
  firstRowId: string;
}

const SelectAllCheckbox: React.FC<SelectAllCheckboxProps> = (props) => {
  const { selectedRows, firstRowId, onSelect, rowsCount } = props;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (rowsCount === 1) {
      if (event.target.checked) {
        onSelect(firstRowId);
      } else {
        onSelect('');
      }
    } else {
      if (event.target.checked) {
        onSelect('*');
      } else {
        onSelect('');
      }
    }
  };

  const checked = useMemo(
    () =>
      selectedRows === '*' || (rowsCount === 1 && selectedRows === firstRowId),
    [firstRowId, rowsCount, selectedRows],
  );

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="scale-150 cursor-pointer"
      />
    </div>
  );
};

export default SelectAllCheckbox;
