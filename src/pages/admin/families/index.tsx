import SAICell from '@components/Cells/FederalSAICell';
import ParentOneCell from '@components/Cells/ParentOneCell';
import ParentTwoCell from '@components/Cells/ParentTwoCell';
import StateCell from '@components/Cells/StateCell';
import StudentCountCell from '@components/Cells/StudentCountCell';
import AssignedIcon from '@components/Icons/AssignedIcon';
import AssignmentIcon from '@components/Icons/AssignmentIcon';
import CloseIcon from '@components/Icons/CloseIcon';
import LaptopCheckIcon from '@components/Icons/LaptopCheckIcon';
import NeedsHelpIcon from '@components/Icons/NeedsHelpIcon';
import SearchIcon from '@components/Icons/SearchIcon';
import VisibilityIcon from '@components/Icons/VisibilityIcon';
import Modal from '@components/Modal/Modal';
import Select, { SelectOption } from '@components/Select/Select';
import Table from '@components/Table/Table';
import TextInput from '@components/TextInput/TextInput';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { awaitingFamiliesBannerHide } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import AssignFinancialAgent from '@modules/admin/families/AssignFinancialAgent/AssignFinancialAgent';
import AwaitingFamiliesBanner from '@modules/admin/families/AwaitingFamiliesBanner/AwaitingFamiliesBanner';
import { useQuery } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import { Family } from '@typings/model/family';
import { getImageUrl } from '@utils/common';
import { cn } from '@utils/style';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { CellProps, Column } from 'react-table';

// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const filterOptions: SelectOption[] = [
  {
    label: 'Show all',
    value: '*',
  },
  {
    label: 'Not assigned and help requested',
    value: 'not-assigned-help-requested',
  },
];

const FamiliesPage: NextPage = () => {
  const [filter, setFilter] = useState(filterOptions[0].value);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState<Family | null>(null);

  const dispatch = useAppDispatch();
  const awaitingFamiliesBanner = useAppSelector((state) => state.auth.awaitingFamiliesBanner);
  const router = useRouter();

  const { isLoading, isRefetching, error, data, refetch } = useQuery(
    [AdminsKeys.families, search, filter, page],
    () =>
      API.admin.family.fetchFamilies({
        search,
        notRequestedHelp: filter === 'not-assigned-help-requested' ? '1' : '0',
        page: page.toString(),
      })
  );

  const onlyOneRowSelected = useMemo(() => {
    return selectedRows.split(',').filter((row) => row !== '').length === 1;
  }, [selectedRows]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleView = () => {
    if (onlyOneRowSelected) {
      router.push(`/admin/families/${selectedRows}`);
    }
  };

  const handleAssign = () => {
    setAssignModalVisible(true);
    const family = data && data.families.find((item) => item.id === selectedRows);
    family && setSelectedFamily(family);
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  const columns: Column<Family>[] = [
    {
      Header: 'Parent 1',
      Cell: ParentOneCell,
    },
    {
      Header: 'Parent 2',
      Cell: ParentTwoCell,
    },
    {
      Header: 'State',
      Cell: StateCell,
    },
    {
      Header: 'Students',
      accessor: (row) => row.students?.length,
      Cell: StudentCountCell,
    },
    {
      Header: 'Federal SAI',
      accessor: (row) => row.id,
      Cell: SAICell,
    },

    {
      Header: 'Status',
      accessor: (row) => row.id,
      Cell: (props: CellProps<Family>) => {
        const { row } = props;
        const [hover, setHover] = useState(false);

        return (
          <div onClick={(e) => e.stopPropagation()} className="flex items-center space-x-4">
            <LaptopCheckIcon
              fill={row.original?.invitationStatus === 'active' ? '#99C24F' : '#666'}
            />
            <NeedsHelpIcon fill={row.original?.helpRequested ? '#FC5555' : '#BFBFBF'} />

            <div
              onMouseLeave={() => {
                setHover(false);
              }}
              onMouseEnter={() => {
                setHover(true);
              }}
              className="relative"
              onClick={() => {
                setAssignModalVisible(true);
                setSelectedFamily(row.original);
              }}>
              {row?.original?.agent ? (
                <>
                  {hover && (
                    <div
                      data-popover="popover-animation"
                      data-popover-mount="opacity-100 scale-100"
                      data-popover-unmount="opacity-0 scale-0 pointer-events-none"
                      data-popover-transition="transition-all duration-200 origin-bottom"
                      className="absolute z-50 -top-20 -left-8 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                      <Typography variation="description3" color="dark" className="">
                        Assigned to :
                      </Typography>
                      <Typography
                        className="capitalize text-black font-medium"
                        variation="description1">
                        {row?.original?.agent?.name}
                      </Typography>
                    </div>
                  )}
                  <Image
                    width={24}
                    height={24}
                    alt="User"
                    className="rounded-full"
                    src={getImageUrl(row?.original?.agent?.name)}
                  />
                </>
              ) : (
                <AssignedIcon />
              )}
            </div>
          </div>
        );
      },
    },
  ];

  const headerComponent = () => {
    return (
      <div className="sm:flex items-center justify-between px-4 sm:px-0 pb-10">
        <div>
          <Typography variation="title1">Families</Typography>
          <Typography variation="description1">
            {isLoading ? 'Loading...' : `${data?.totalRecords || 0} families`}
          </Typography>
        </div>

        <div className="sm:flex items-center mt-4 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-3 md:space-x-5">
          <div className="flex items-center justify-between space-x-3 md:space-x-5">
            <div className="border border-lightest3 flex items-center rounded-lg">
              <button
                onClick={handleView}
                disabled={!onlyOneRowSelected}
                className={cn(
                  'border-r border-lightest3 py-2 px-4',
                  !onlyOneRowSelected && 'opacity-50'
                )}>
                <VisibilityIcon />
              </button>

              <button
                disabled={!onlyOneRowSelected}
                onClick={handleAssign}
                className={cn('py-2 px-4 flex space-x-1', !onlyOneRowSelected && 'opacity-50')}>
                <AssignmentIcon />
                <Typography variation="description1" className="text-mainBlue">
                  Assign
                </Typography>
              </button>
            </div>

            <div
              className={`${
                isSearchVisible ? 'w-full' : 'w-[58px]'
              } border border-lightest3 flex items-center rounded-lg transition-all duration-700 ease-linear`}>
              {isSearchVisible ? (
                <>
                  <TextInput
                    placeholder="Search"
                    className="flex-1"
                    inputClassName="!p-2 !border-none w-full focus:outline-none focus:ring-0 focus:border-transparent"
                    value={search}
                    onChange={handleSearch}
                    autoFocus={isSearchVisible}
                  />
                  <button
                    onClick={() => {
                      setSearch('');
                      setIsSearchVisible(false);
                    }}
                    className="py-2 px-4">
                    <CloseIcon width="16" height="17" fill="#666666" />
                  </button>
                </>
              ) : (
                <button onClick={() => setIsSearchVisible(true)} className="py-2 px-4">
                  <SearchIcon />
                </button>
              )}
            </div>
          </div>

          <Select
            value={filter}
            onChange={setFilter}
            className="sm:w-72"
            options={filterOptions}
            placeholder="Select filter"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="h-full min-h-screen flex flex-col">
      <Head>
        <title>Families</title>
      </Head>
      <Modal
        className="p-0 bg-lightest4"
        closeIcon={false}
        visible={assignModalVisible}
        onClose={setAssignModalVisible}>
        {selectedFamily && (
          <AssignFinancialAgent
            closeModal={setAssignModalVisible}
            selectedFamily={selectedFamily}
          />
        )}
      </Modal>
      {awaitingFamiliesBanner && (
        <AwaitingFamiliesBanner
          onClick={() => {
            setFilter(filterOptions[1].value);
            dispatch(awaitingFamiliesBannerHide());
          }}
        />
      )}

      <div
        className={`${
          awaitingFamiliesBanner ? 'bg-lightest4' : 'bg-white'
        } px-4 py-8 h-full flex-grow`}>
        <div className="max-w-7xl mx-auto h-full">
          <Table
            selectable
            columns={columns}
            data={data?.families}
            error={error as Error}
            onSelect={setSelectedRows}
            emptyActionClick={refetch}
            selectedRows={selectedRows}
            emptyActionText="Refresh"
            emptyTitle="No families found"
            renderHeader={headerComponent}
            primaryFieldsIndexes={[0, 3, 4]}
            loading={isLoading || isRefetching}
            emptyImageUrl="/empty-states/families.svg"
            onRowClick={(row) => {
              if (row.invitationStatus === 'invited') {
                showToast('Family has not accepted the invitation yet');
              } else {
                router.push(`/admin/families/${row.id}`);
              }
            }}
            pagination={{ totalRecords: data?.totalRecords, onPageChange: handlePageChange }}
          />
        </div>
      </div>
    </div>
  );
};

export default FamiliesPage;
