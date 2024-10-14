import { Family } from '@typings/model/family';
import { getStateName } from '@utils/state';
import { CellProps } from 'react-table';

const StateCell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;
  return <span>{getStateName(row.original.state) || 'N/A'}</span>;
};

export default StateCell;
