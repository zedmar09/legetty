import { Family } from '@typings/model/family';
import { CellProps } from 'react-table';

const StudentCountCell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;
  return <span>{row?.original.students?.length || 'N/A'}</span>;
};

export default StudentCountCell;
