import Button from '@components/Button/Button';
import ParentOneCell from '@components/Cells/ParentOneCell';
import ParentTwoCell from '@components/Cells/ParentTwoCell';
import StateCell from '@components/Cells/StateCell';
import StatusCell from '@components/Cells/StatusCell';
import StudentCountCell from '@components/Cells/StudentCountCell';
import Container from '@components/Container/Container';
import FamiliesEmptyState from '@components/EmptyState/FamiliesEmptyState';
import AddCircle from '@components/Icons/AddCircle';
import FlagIcon from '@components/Icons/FlagIcon';
import MailIcon from '@components/Icons/MailIcon';
import PhoneIcon from '@components/Icons/PhoneIcon';
import Table from '@components/Table/Table';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { fetchProfessionalProfile } from '@core/redux/reducers/professionalSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import { useQuery } from '@tanstack/react-query';
import { Family } from '@typings/model/family';
import { getErrorMessage } from '@utils/error';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Column } from 'react-table';

// const NoData = () => (
//   <div className="flex flex-col justify-center items-center my-4 w-full">
//     <FamilyIcon />
//     <Typography variation="title2" className="text-darker text-title3 md:text-title2">
//       You still don&rsquo;t have any families enrolled.
//     </Typography>
//     <Link href="/admission-professional/invite-family">
//       <Typography variation="title3" className="text-mainBlue mt-2">
//         Start by clicking Invite Families
//       </Typography>
//     </Link>
//     <Typography variation="title3" className="text-dark mt-4">
//       They&rsquo;ll be asked to enter their information
//     </Typography>
//   </div>
// );

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

const AdmissionProfessionalHomePage: NextPage = () => {
  // const [selectedRows, setSelectedRows] = useState('');
  const [page, setPage] = useState(1);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const professional = useAppSelector((state) => state.professional.professional);

  const {
    isLoading,
    isError,
    data: professionals,
    refetch,
    isRefetching,
    error,
  } = useQuery(['admission-professionals/families', page], () =>
    API.ap.family.fetchFamilies({
      page,
    })
  );

  let content: React.ReactNode = null;

  useEffect(() => {
    dispatch(fetchProfessionalProfile());
  }, []);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) {
    content = (
      <div className="flex justify-center align-center h-screen">
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
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div>
            <Typography variation="title1">{professional?.name}</Typography>
            <Typography variation="title3">Admission Professional</Typography>
          </div>
          <Link href="/admission-professional/invite-family">
            <Button icon={<AddCircle />} className="hidden md:inline-flex">
              Invite Families
            </Button>
            <Button
              icon={<AddCircle />}
              className="md:hidden flex items-center justify-center !px-4"
            />
          </Link>
        </div>
        <div className="my-8 grid md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="lg:col-span-2 bg-white rounded-lg py-4 px-6 flex-grow">
            <Typography variation="title2" className="text-darker">
              Contact
            </Typography>
            <div className="mt-2 flex items-center space-x-2">
              <PhoneIcon />
              <Typography variation="description1" className="text-darker">
                {professional?.phone}
              </Typography>
            </div>

            <div className="mt-2 flex items-center space-x-2">
              <MailIcon />
              <Typography variation="description1" className="text-darker">
                {professional?.email}
              </Typography>
            </div>
          </div>

          <div className="bg-white rounded-lg py-4 px-6 flex-grow">
            <Typography variation="title2" className="text-darker">
              Activity
            </Typography>
            <div className="mt-2 flex items-center space-x-2">
              <FlagIcon />
              <Typography variation="description1" className="text-dark">
                Last Visit:{' '}
                {(professional?.lastLoginAt &&
                  new Date(professional?.lastLoginAt).toDateString()) ||
                  'Never'}
              </Typography>
            </div>

            {professional?.status === 'active' ? (
              <div className="mt-2 flex items-center space-x-2">
                <div className="bg-positiveAction w-2 h-2 rounded-full" />
                <Typography variation="description1" className="text-darker">
                  Online
                </Typography>
              </div>
            ) : (
              <div className="mt-2 flex items-center space-x-2">
                <div className="bg-negativeAction w-2 h-2 rounded-full" />
                <Typography variation="description1" className="text-darker">
                  Offline
                </Typography>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg py-4 px-6 flex-grow">
            <div className="flex items-center justify-between">
              <Typography variation="title2" className="text-darker">
                Families
              </Typography>
            </div>
            <Typography variation="title1" className="text-darker">
              {professional?.familyCount || 0}
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
        {professionals?.data?.length !== 0 ? (
          <Table
            title="Families"
            columns={columns}
            data={professionals?.data}
            // selectable
            error={error as Error}
            // onSelect={setSelectedRows}
            // selectedRows={selectedRows}
            emptyTitle="No Family found"
            emptyActionText="Refresh"
            emptyActionClick={refetch}
            primaryFieldsIndexes={[0, 3, 4]}
            loading={isLoading || isRefetching}
            emptyImageUrl="/empty-states/families.svg"
            onRowClick={(row) => {
              if (row.invitationStatus === 'invited') {
                showToast('Family has not accepted the invitation yet');
              } else {
                router.push(`/admission-professional/families/${row.id}`);
              }
            }}
            pagination={{
              totalRecords: professionals?.totalRecords,
              onPageChange: handlePageChange,
            }}
          />
        ) : (
          <FamiliesEmptyState inviteFamilies="/admission-professional/invite-family" />
        )}
      </div>
    );
  }

  return (
    <div className="h-full bg-lightest4 min-h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container className="py-14 px-4">{content}</Container>;
    </div>
  );
};

export default AdmissionProfessionalHomePage;
