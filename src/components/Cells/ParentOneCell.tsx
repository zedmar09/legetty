import Typography from '@components/Typography/Typography';
import { Family } from '@typings/model/family';
import { CellProps } from 'react-table';

const ParentOneCell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;

  const name = row.original.name
    ? row.original.name
    : row.original.parents?.[0]
    ? row.original.parents?.[0]?.firstName + ' ' + row.original.parents?.[0]?.lastName
    : 'N/A';

  return (
    <div className="flex items-center">
      <Typography>{name}</Typography>
    </div>
  );
};

export default ParentOneCell;
