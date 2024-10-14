import Container from '@/components/Container/Container';
import Button from '@components/Button/Button';
import EditIcon from '@components/Icons/EditIcon';
import ViewIcon from '@components/Icons/ViewIcon';
import Table from '@components/Table/Table';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import API from '@core/services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { Column } from 'react-table';

const AgentsPage: NextPage = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedRows, setSelectedRows] = useState('');
  // const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const {
    isLoading,
    isError,
    data: agent,
    refetch,
  } = useQuery([AdminsKeys.Agent, page], () =>
    API.admin.agent.fetchAgents({
      page,
    })
  );

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Name',
          accessor: 'name',
          minWidth: '50%',
        },
        {
          Header: 'Phone',
          accessor: 'phone',
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Families',
          accessor: 'families',
          Cell: (props) => {
            const { value } = props;
            return <span>{value?.length || 0}</span>;
          },
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
      ] as Column<any>[],
    [agent?.agents, selectedRows]
  );

  const { isLoading: deletingAgents, mutate: deleteAgents } = useMutation(API.agent.deleteAgents, {
    onSuccess(response) {
      queryClient.invalidateQueries([AdminsKeys.Agent]);
      showToast(`${response.affected} agents deleted successfully!`);
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  // const handleDeleteAgents = () => {
  //   deleteAgents(selectedRows);
  //   setDeleteModalVisible(false);
  //   setSelectedRows('');
  // };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-lightest4 min-h-screen h-full">
      <Head>
        <title>Agents</title>
      </Head>
      <Container>
        {/* <ExModal
          confirming={deletingAgents}
          visible={deleteModalVisible}
          onClose={setDeleteModalVisible}
          onConfirm={handleDeleteAgents}
          confirmBtnType="negative mainBlue"
          title="Are you sure want to delete selected contributors?"
          description="By deleting selected contributors, you are removing their access to the system."
          secondaryDescription="This action cannot be undone."
        /> */}
        <div className="flex lg:flex-row justify-between items-center pt-8 sm:pt-14 px-8 max-w-7xl mx-auto">
          <Typography variation="title2" className="lg:hidden">
            Financial Agents
          </Typography>

          <Typography variation="title0" className="hidden lg:block">
            Financial Agents
          </Typography>

          <div className="flex items-center rounded">
            <div className=" bg-white rounded-lg flex items-center border">
              {selectedRows.length > 0 && (
                <>
                  {selectedRows.split(',').length === 1 && selectedRows !== '*' && (
                    <Link href={`/admin/agents/${selectedRows}`} className="p-3 border-r">
                      <ViewIcon />
                    </Link>
                  )}

                  {selectedRows.split(',').length === 1 && selectedRows !== '*  ' && (
                    <Link href={`/admin/agents/add?agentId=${selectedRows}`} className="p-3">
                      <EditIcon />
                    </Link>
                  )}

                  {/* {selectedRows !== '*' && (
                    <button onClick={() => setDeleteModalVisible(true)} className="p-3">
                      <DeleteIcon />
                    </button>
                  )} */}
                </>
              )}
            </div>

            <Link href="/admin/agents/add" className="ml-4 hidden lg:block">
              <Button className="text-base rounded-lg font-semibold pt-[10px] pb-[11px]">
                Add Agents
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-screen-desktop mx-auto">
          <Typography variation="title3" className="mt-2 mb-8 px-8">
            {agent?.totalRecords} people
          </Typography>
        </div>

        <div className="max-w-screen-desktop mx-auto w-full h-full px-4 sm:px-8">
          <Table
            data={agent?.agents}
            selectable
            selectedRows={selectedRows}
            onSelect={setSelectedRows}
            columns={columns}
            loading={isLoading}
            primaryFieldsIndexes={[0, 1, 2]}
            onRowClick={(row) => router.push(`/admin/agents/${row.id}`)}
            emptyActionClick={refetch}
            emptyTitle="No Agent found"
            emptyActionText="Refresh"
            pagination={{
              totalRecords: agent?.totalRecords,
              onPageChange: handlePageChange,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default AgentsPage;
