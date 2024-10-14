import SAICell from '@components/Cells/FederalSAICell';
import ParentOneCell from '@components/Cells/ParentOneCell';
import ParentTwoCell from '@components/Cells/ParentTwoCell';
import StateCell from '@components/Cells/StateCell';
import StatusCell from '@components/Cells/StatusCell';
import StudentCountCell from '@components/Cells/StudentCountCell';
import Container from '@components/Container/Container';
import DoubleArrowLeftRight from '@components/Icons/BankIcon copy';
import FlagIcon from '@components/Icons/FlagIcon';
import MailIcon from '@components/Icons/MailIcon';
import PhoneIcon from '@components/Icons/PhoneIcon';
import RemoveUser from '@components/Icons/RemoveUser';
import Modal from '@components/Modal/Modal';
import Table from '@components/Table/Table';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import API from '@core/services';
import AssignFinancialAgent from '@modules/admin/families/AssignFinancialAgent/AssignFinancialAgent';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import { Family } from '@typings/model/family';
import { getErrorMessage } from '@utils/error';
import { cn } from '@utils/style';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { Column } from 'react-table';

const AgentDetailPage: NextPage = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState('');
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState<Family | null>(null);

  const {
    isLoading,
    isError,
    error,
    data: agent,
  } = useQuery([AdminsKeys.Agent, id], () => API.agent.fetchAgent(id as string), {
    enabled: !!id,
  });

  const {
    isLoading: loadingFamilies,
    error: fetchFamiliesError,
    data: agentFamilies,
    refetch,
  } = useQuery(
    ['admin/agent/families', id, page],
    () => API.agent.fetchAgentFamilies({ id: id as string, page }),
    {
      onSuccess: () => {
        setSelectedRows('');
      },
      enabled: !!id,
    }
  );

  const { isLoading: removeAgentLoading, mutate: removeAgent } = useMutation(
    API.admin.agent.removeAgent,
    {
      onSuccess() {
        showToast(`Successfully! remove family from agent`);
        refetch();
      },
      onError() {
        showToast('Unable to remove agent, please try again!');
      },
    }
  );

  const handleAssign = () => {
    setAssignModalVisible(true);
    const family = agentFamilies && agentFamilies.data.find((item) => item.id === selectedRows);
    family && setSelectedFamily(family);
  };

  const handleRemove = () => {
    removeAgent({ id: selectedRows });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const onlyOneRowSelected = useMemo(() => {
    return selectedRows.split(',').filter((row) => row !== '').length === 1;
  }, [selectedRows]);

  let content: React.ReactNode = null;

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
      Header: 'Federal SAI',
      accessor: (row) => row.id,
      Cell: SAICell,
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
      Header: 'Status',
      accessor: (row) => row.id,
      Cell: StatusCell,
    },
  ];

  const headerComponent = () => {
    return (
      <div className="sm:flex items-center justify-between pb-4 sm:pb-10">
        <Modal
          className="p-0"
          closeIcon={false}
          visible={assignModalVisible}
          onClose={setAssignModalVisible}>
          {selectedRows && (
            <AssignFinancialAgent
              closeModal={setAssignModalVisible}
              selectedFamily={selectedFamily}
              refetch={refetch}
            />
          )}
        </Modal>
        <div className="hidden sm:block">
          <Typography variation="title1">Families</Typography>
        </div>
        <div className="block sm:hidden">
          <Typography variation="title2" className="text-darker pl-6">
            Families
          </Typography>
        </div>

        <div className="flex items-center mt-4 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-3 md:space-x-5">
          <div className="flex items-center justify-between space-x-3 md:space-x-5">
            <div
              className={cn(
                'border border-lightest3 flex items-center rounded-lg',
                !onlyOneRowSelected && 'hidden'
              )}>
              <button
                onClick={() => handleAssign()}
                disabled={!onlyOneRowSelected}
                className={cn('flex items-center space-x-2 border-r border-lightest3 py-2 px-4')}>
                <DoubleArrowLeftRight />
                <Typography variation="description1" className="text-dark">
                  Assign to other agent
                </Typography>
              </button>

              <button
                disabled={!onlyOneRowSelected}
                onClick={handleRemove}
                className={cn('flex items-center space-x-2 border-r border-lightest3 py-2 px-4')}>
                <RemoveUser />
                <Typography variation="description1" className="text-dark">
                  Remove from agent
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <span className="text-negativeAction">{getErrorMessage(error)}</span>
      </div>
    );
  } else {
    content = (
      <div className="">
        <Typography variation="title1">{agent?.name}</Typography>
        <Typography variation="title3">College Costs Secret Agent</Typography>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:justify-between">
          <div className="bg-white shadow rounded-lg py-4 px-6 col-span-2 w-full">
            <Typography variation="title2" className="text-darker">
              Contact
            </Typography>

            <Link href={`tel:${agent?.phone}`}>
              <div className="mt-2 flex items-center space-x-2 hover:underline hover:text-mainBlue text-darker">
                <PhoneIcon />
                <Typography variation="description1">{agent?.phone}</Typography>
              </div>
            </Link>

            <Link href={`mailto:${agent?.email}`}>
              <div className="mt-2 flex items-center space-x-2 hover:underline hover:text-mainBlue text-darker">
                <MailIcon />
                <Typography variation="description1">{agent?.email}</Typography>
              </div>
            </Link>
          </div>

          <div className="bg-white shadow rounded-lg py-4 px-6 w-full">
            <Typography variation="title2" className="text-darker">
              Activity
            </Typography>
            <div className="mt-2 flex sm:items-center space-x-2">
              <FlagIcon />
              <Typography variation="description1" className="text-dark">
                Last Visit:{' '}
                {(agent?.lastLoginAt && new Date(agent?.lastLoginAt).toDateString()) || 'Never'}
              </Typography>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <div
                className={`${
                  agent.status === 'active' ? 'bg-positiveAction' : 'bg-negativeAction'
                }  w-2 h-2 rounded-full`}
              />
              <Typography variation="description1" className="text-darker">
                {agent.status === 'active' ? 'Active' : 'Offline'}
              </Typography>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg py-4 px-6 w-full">
            <div className="flex items-center justify-between">
              <Typography variation="title2" className="text-darker">
                Families
              </Typography>
              {/* <Link href="/families" className="text-description1 text-mainBlue">
                VIEW
              </Link> */}
            </div>
            <Typography variation="title1" className="text-darker">
              {agent?.families?.length || 0}
            </Typography>
            <div className="text-right">
              <div className="flex justify-end items-end">
                <Typography variation="description1" className="text-dark mr-2">
                  Since last week
                </Typography>
                <div className="bg-[#C7E1C7] text-positiveAction p-1.5 rounded-lg">
                  <Typography variation="description2" className="leading-none">
                    +0%
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Table
          selectable
          onSelect={setSelectedRows}
          selectedRows={selectedRows}
          data={agentFamilies?.data}
          className="mt-6"
          columns={columns}
          primaryFieldsIndexes={[1, 2]}
          loading={loadingFamilies}
          renderHeader={headerComponent}
          error={fetchFamiliesError as Error}
          emptyActionClick={refetch}
          emptyTitle="No Family found"
          emptyActionText="Refresh"
          pagination={{
            totalRecords: agentFamilies?.totalRecords,
            onPageChange: handlePageChange,
          }}
        />
      </div>
    );
  }

  return (
    <div className="bg-lightest4 min-h-screen h-full">
      <Head>
        <title>College Cost - Agent</title>
      </Head>
      <Container className="pt-14 px-4">{content}</Container>
    </div>
  );
};

export default AgentDetailPage;
