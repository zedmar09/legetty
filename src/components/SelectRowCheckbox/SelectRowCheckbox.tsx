import React, { ChangeEventHandler } from 'react';

interface SelectRowCheckboxProps {
  value: string;
  selectedRows: string;
  rowIds: string[];
  onSelect: (selectedRows: string) => void;
}

const SelectRowCheckbox: React.FC<SelectRowCheckboxProps> = (props) => {
  const { value, selectedRows, onSelect, rowIds } = props;
  const checked =
    selectedRows === '*' || selectedRows.split(',').includes(value);

  const firstRowId = rowIds[0];
  const rowsCount = rowIds.length;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation();
    const { checked } = event.target;
    if (checked) {
      const totalSelectedRows =
        selectedRows === '' ? 0 : selectedRows.split(',').length;
      if (rowsCount === 1) {
        onSelect(firstRowId);
      } else {
        if (totalSelectedRows + 1 === rowsCount) {
          onSelect('*');
        } else {
          onSelect(selectedRows ? selectedRows + ',' + value : value);
        }
      }
    } else {
      if (selectedRows === '*') {
        onSelect(rowIds.filter((row) => row !== value).join(','));
      } else {
        onSelect(
          selectedRows
            .split(',')
            .filter((row) => row !== value)
            .join(','),
        );
      }
    }
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      onClick={(event) => event.stopPropagation()}
      className="cursor-pointer"
    />
  );
};

export default SelectRowCheckbox;
