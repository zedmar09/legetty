import ParentOneCell from '@components/Cells/ParentOneCell';
import ParentTwoCell from '@components/Cells/ParentTwoCell';
import StateCell from '@components/Cells/StateCell';
import StatusCell from '@components/Cells/StatusCell';
import StudentCountCell from '@components/Cells/StudentCountCell';
import Container from '@components/Container/Container';
import FlagIcon from '@components/Icons/FlagIcon';
import MailIcon from '@components/Icons/MailIcon';
import PhoneIcon from '@components/Icons/PhoneIcon';
import Table from '@components/Table/Table';
import Typography from '@components/Typography/Typography';
import API from '@core/services';
import { useQuery } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import { Family } from '@typings/model/family';
import { getErrorMessage } from '@utils/error';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Column } from 'react-table';

const AdmissionProfessionalDetailPage: NextPage = (props) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  // const [selectedRows, setSelectedRows] = useState('');

  const { id } = router.query;

  const {
    isLoading,
    isError,
    error,
    data: admissionProfessional,
  } = useQuery(
    [AdminsKeys.AdmissionProfessionals, id],
    () => API.admissionProfessional.fetchAdmissionProfessional(id as string),
    {
      enabled: !!id,
    }
  );

  const {
    isLoading: loadingFamilies,
    error: fetchFamiliesError,
    data: admissionProfessionalFamilies,
    refetch,
  } = useQuery(
    ['admin/professional/families', id],
    () => API.admissionProfessional.fetchAdmissionProfessionalFamily({ id: id as string, page }),
    {
      enabled: !!id,
    }
  );

  const handlePageChange = (page: number) => {
    setPage(page);
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
      Header: 'Status',
      accessor: (row) => row.id,
      Cell: StatusCell,
    },
  ];

  let content: React.ReactNode = null;

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
      <div>
        <Typography variation="title1">{admissionProfessional.name}</Typography>
        <Typography variation="title3">College Costs Secret Admission Professional</Typography>
        <div className="mt-8 flex space-x-4 justify-between">
          <div className="bg-white rounded-lg py-4 px-6 flex-grow">
            <Typography variation="title2" className="text-darker">
              Contact
            </Typography>
            <Link href={`tel:${admissionProfessional.phone}`}>
              <div className="mt-2 flex items-center space-x-2 hover:underline hover:text-mainBlue text-darker">
                <PhoneIcon />
                <Typography variation="description1">{admissionProfessional.phone}</Typography>
              </div>
            </Link>

            <Link href={`mailto:${admissionProfessional.email}`}>
              <div className="mt-2 flex items-center space-x-2 hover:underline hover:text-mainBlue text-darker">
                <MailIcon />
                <Typography variation="description1">{admissionProfessional.email}</Typography>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg py-4 px-6 flex-grow">
            <Typography variation="title2" className="text-darker">
              Activity
            </Typography>
            <div className="mt-2 flex items-center space-x-2">
              <FlagIcon />
              <Typography variation="description1" className="text-dark">
                Last Visit:{' '}
                {(admissionProfessional.lastLoginAt &&
                  new Date(admissionProfessional.lastLoginAt).toDateString()) ||
                  'Never'}
              </Typography>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <div
                className={`${
                  admissionProfessional.status === 'active'
                    ? 'bg-positiveAction'
                    : 'bg-negativeAction'
                }  w-2 h-2 rounded-full`}
              />
              <Typography variation="description1" className="text-darker">
                {admissionProfessional.status === 'active' ? 'Active' : 'Offline'}
              </Typography>
            </div>
          </div>

          <div className="bg-white rounded-lg py-4 px-6 flex-grow">
            <div className="flex items-center justify-between">
              <Typography variation="title2" className="text-darker">
                Families
              </Typography>
              {/* <Link href="/families" className="text-description1 text-mainBlue">
                VIEW
              </Link> */}
            </div>
            <Typography variation="title1" className="text-darker">
              {admissionProfessional?.families?.length || 0}
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
          // selectable
          // onSelect={setSelectedRows}
          // selectedRows={selectedRows}
          data={admissionProfessionalFamilies?.data || []}
          title="Families"
          className="mt-6"
          columns={columns}
          primaryFieldsIndexes={[1, 2]}
          loading={loadingFamilies}
          error={fetchFamiliesError as Error}
          emptyActionClick={refetch}
          emptyTitle="No Family found"
          emptyActionText="Refresh"
          pagination={{
            totalRecords: admissionProfessionalFamilies?.totalRecords,
            onPageChange: handlePageChange,
          }}
        />
      </div>
    );
  }

  return (
    <div className="bg-lightest4 min-h-screen h-full">
      <Head>
        <title>College Cost - Admission Professional</title>
      </Head>
      <Container className="pt-14 px-4">{content}</Container>
    </div>
  );
};

export default AdmissionProfessionalDetailPage;
