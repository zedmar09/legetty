import { Family } from '@typings/model/family';
import { CellProps } from 'react-table';

const AssignedCell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;
  return <span>{row?.original?.agent?.name || 'N/A'}</span>;
};

export default AssignedCell;
