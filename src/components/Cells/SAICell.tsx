import { Family } from '@typings/model/family';
import { usdFormatter } from '@utils/common';
import { CellProps } from 'react-table';

const SAICell: React.FC<CellProps<Family>> = (props) => {
  const { row } = props;
  return <span>{usdFormatter.format(+row?.original.institutional_sai) || 'N/A'}</span>;
};

export default SAICell;
