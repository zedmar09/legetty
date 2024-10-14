import AssignedCell from '@components/Cells/AssignedCell';
import SAICell from '@components/Cells/FederalSAICell';
import StudentCountCell from '@components/Cells/StudentCountCell';
import Table from '@components/Table/Table';
import Typography from '@components/Typography/Typography';
import { fetchAdminAggregates } from '@core/redux/reducers/adminSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { Family } from '@typings/model/family';
import { getHumanDate } from '@utils/date';
import Link from 'next/link';
import { CellProps, Column } from 'react-table';

type Props = {};

const LatestFamilyTable = (props: Props) => {
  const latestFamilies = useAppSelector((state) => state.admin.latestFamilies);
  const dispatch = useAppDispatch();

  const refetchLestFamilyTable = () => {
    dispatch(fetchAdminAggregates());
  };

  const columns: Column<Family>[] = [
    {
      Header: 'Main User',
      Cell: (props: CellProps<Family>) => {
        const { row } = props;
        return (
          <div className="flex items-center">
            <Typography>{row.original?.name}</Typography>
          </div>
        );
      },
    },
    {
      Header: 'Children',
      accessor: (row) => row.id,
      Cell: StudentCountCell,
    },
    {
      Header: 'Federal SAI',
      accessor: (row) => row.id,
      Cell: SAICell,
    },
    {
      Header: 'Assigned',
      accessor: (row) => row.id,
      Cell: AssignedCell,
    },
    {
      Header: 'Added',
      accessor: (row) => row.id,
      Cell: (props: CellProps<Family>) => {
        return <span>{getHumanDate(props.row?.original?.createdAt) || 'N/A'} </span>;
      },
    },
  ];

  const headerComponent = () => {
    return (
      <div className="flex items-center justify-between pb-4">
        <Typography variation="title2" className="text-darker">
          Latest families added
        </Typography>
        <Link href="/admin/families" className="text-description1 text-mainBlue">
          VIEW
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Table
        columns={columns}
        data={latestFamilies}
        emptyActionText="Refresh"
        emptyTitle="No families found"
        renderHeader={headerComponent}
        primaryFieldsIndexes={[0, 3, 4]}
        emptyImageUrl="/empty-states/families.svg"
        emptyActionClick={refetchLestFamilyTable}
      />
    </div>
  );
};

export default LatestFamilyTable;
