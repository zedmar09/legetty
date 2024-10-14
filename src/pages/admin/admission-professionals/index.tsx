import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
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

const AdmissionProfessionalsPage: NextPage = () => {
  const [selectedRows, setSelectedRows] = useState('');
  // const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: professional,
    refetch,
  } = useQuery([AdminsKeys.AdmissionProfessionals, page], () =>
    API.admissionProfessional.fetchAdmissionProfessionals({
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
            return <span>{value?.length | 0}</span>;
          },
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
      ] as Column<any>[],
    [professional, selectedRows]
  );

  const { isLoading: deletingAdmissionProfessionals, mutate: deleteAdmissionProfessionals } =
    useMutation(API.admissionProfessional.deleteAdmissionProfessionals, {
      onSuccess(response) {
        queryClient.invalidateQueries([AdminsKeys.AdmissionProfessionals]);
        showToast(`${response.affected} Admission Professionals deleted successfully!`);
      },
      onError() {
        showToast('Something went wrong, please try again!');
      },
    });

  // const handleDeleteAdmissionProfessionals = () => {
  //   deleteAdmissionProfessionals(selectedRows);
  //   setDeleteModalVisible(false);
  //   setSelectedRows('');
  // };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-lightest4 min-h-screen h-full">
      <Head>
        <title>Admission Professionals</title>
      </Head>
      <Container>
        {/* <ExModal
          confirming={deletingAdmissionProfessionals}
          visible={deleteModalVisible}
          onClose={setDeleteModalVisible}
          onConfirm={handleDeleteAdmissionProfessionals}
          confirmBtnType="negative mainBlue"
          title="Are you sure want to delete selected contributors?"
          description="By deleting selected contributors, you are removing their access to the system."
          secondaryDescription="This action cannot be undone."
          confirmLabel="Delete"
        /> */}

        <div className="flex lg:flex-row justify-between items-center pt-8 sm:pt-14 px-8 max-w-7xl mx-auto">
          <Typography variation="title2" className="lg:hidden">
            Admission Professionals
          </Typography>
          <Typography variation="title0" className="hidden lg:block">
            Admission Professionals
          </Typography>

          <div className="flex items-center space-x-6">
            {selectedRows.length > 0 && (
              <div className="flex items-center border border-lightest3 bg-white rounded-lg">
                {selectedRows.split(',').length === 1 && selectedRows !== '*' && (
                  <Link href={`/admin/admission-professionals/${selectedRows}`}>
                    <div className="border-r border-lightest3 py-3 px-4">
                      <ViewIcon />
                    </div>
                  </Link>
                )}

                {selectedRows.split(',').length === 1 && selectedRows !== '*' && (
                  <div className="border-lightest3 py-3 px-4">
                    <Link
                      href={`/admin/admission-professionals/add?admissionProfessionalId=${selectedRows}`}>
                      <EditIcon />
                    </Link>
                  </div>
                )}

                {/* {selectedRows !== '*' && (
                  <button onClick={() => setDeleteModalVisible(true)} className="py-3 px-4">
                    <DeleteIcon />
                  </button>
                )} */}
              </div>
            )}

            <Link href="/admin/admission-professionals/add" className="hidden lg:block">
              <Button className="text-base rounded-lg font-semibold pt-[10px] pb-[11px]">
                Add Admission Professionals
              </Button>
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <Typography variation="title3" className="mt-2 mb-8 px-8">
            {professional?.totalRecords} people
          </Typography>
        </div>
        <div className="max-w-7xl mx-auto w-full h-full px-4 sm:px-8">
          <Table
            data={professional?.data}
            selectable
            selectedRows={selectedRows}
            onSelect={setSelectedRows}
            loading={isLoading}
            columns={columns}
            primaryFieldsIndexes={[0, 1, 2]}
            emptyActionClick={refetch}
            emptyTitle="No Admission Professional found"
            emptyActionText="Refresh"
            onRowClick={(row) => router.push(`/admin/admission-professionals/${row.id}`)}
            pagination={{
              totalRecords: professional?.totalRecords,
              onPageChange: handlePageChange,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default AdmissionProfessionalsPage;
