import { Family } from '@typings/model/family';
import { CellProps } from 'react-table';

const StatusCell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;
  return (
    <span
      className={`capitalize ${
        row?.original?.invitationStatus === 'active' && 'text-positiveAction'
      }
      ${row?.original?.invitationStatus === 'invited' && 'text-[#FFA500]'}
      `}>
      {row?.original?.invitationStatus || 'N/A'}
    </span>
  );
};

export default StatusCell;
