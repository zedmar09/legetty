import Typography from '@components/Typography/Typography';
import { Family } from '@typings/model/family';
import { CellProps } from 'react-table';

const ParentTwoCell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;
  const name = row.original.parents?.[1]
    ? row.original.parents?.[1]?.firstName + ' ' + row.original.parents?.[1]?.lastName
    : 'N/A';
  return (
    <div className="flex items-center">
      <Typography>{name}</Typography>
    </div>
  );
};

export default ParentTwoCell;
