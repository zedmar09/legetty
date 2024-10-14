import SAICell from '@components/Cells/FederalSAICell';
import ParentOneCell from '@components/Cells/ParentOneCell';
import ParentTwoCell from '@components/Cells/ParentTwoCell';
import StateCell from '@components/Cells/StateCell';
import StatusCell from '@components/Cells/StatusCell';
import StudentCountCell from '@components/Cells/StudentCountCell';
import Container from '@components/Container/Container';
import FamiliesEmptyState from '@components/EmptyState/FamiliesEmptyState';
import FlagIcon from '@components/Icons/FlagIcon';
import MailIcon from '@components/Icons/MailIcon';
import PhoneIcon from '@components/Icons/PhoneIcon';
import Table from '@components/Table/Table';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { fetchAgentProfile } from '@core/redux/reducers/agentSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import { useQuery } from '@tanstack/react-query';
import { Family } from '@typings/model/family';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Column } from 'react-table';

const FinancialAgentHomePage: NextPage = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const agent = useAppSelector((state) => state.agent.agent);

  const {
    isLoading,
    data: families,
    error,
    refetch,
    isRefetching,
  } = useQuery(['agent/families', page], () =>
    API.fa.family.fetchFamilies({
      page,
    })
  );

  useEffect(() => {
    dispatch(fetchAgentProfile());
  }, []);

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

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  let content: React.ReactNode = null;

  content = (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between pt-10">
        <div>
          <Typography variation="title1" className="capitalize">
            {agent?.name}
          </Typography>
          <Typography variation="title3">Financial Agent</Typography>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="lg:col-span-2 bg-white rounded-lg py-4 px-6 flex-grow">
          <Typography variation="title2" className="text-darker">
            Contact
          </Typography>
          <div className="mt-2 flex items-center space-x-2">
            <PhoneIcon />
            <Typography variation="description1" className="text-darker">
              {agent?.phone}
            </Typography>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <MailIcon />
            <Typography variation="description1" className="text-darker">
              {agent?.email}
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
              {(agent?.lastLoginAt && new Date(agent?.lastLoginAt).toDateString()) || 'Never'}
            </Typography>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <div className="bg-negativeAction w-2 h-2 rounded-full" />
            <Typography variation="description1" className="text-darker">
              Offline
            </Typography>
          </div>
        </div>

        <div className="bg-white rounded-lg py-4 px-6 flex-grow">
          <div className="flex items-center justify-between">
            <Typography variation="title2" className="text-darker">
              Families
            </Typography>
          </div>
          <Typography variation="title1" className="text-darker">
            {agent?.familyCount || 0}
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

      {families?.data?.length !== 0 ? (
        <Table
          title="Families"
          columns={columns}
          data={families?.data}
          className="mt-4"
          error={error as Error}
          emptyActionText="Refresh"
          emptyActionClick={refetch}
          emptyTitle="No families found"
          primaryFieldsIndexes={[0, 3, 4]}
          loading={isLoading || isRefetching}
          emptyImageUrl="/empty-states/families.svg"
          onRowClick={(row) => {
            if (row.invitationStatus === 'invited') {
              showToast('Family has not accepted the invitation yet');
            } else {
              router.push(`/agent/families/${row.id}`);
            }
          }}
          pagination={{
            totalRecords: families?.totalRecords,
            onPageChange: handlePageChange,
          }}
        />
      ) : (
        <FamiliesEmptyState />
      )}
    </div>
  );

  return (
    <div className="h-full bg-lightest4 min-h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container className="py-14 px-4">{content}</Container>;
    </div>
  );
};

export default FinancialAgentHomePage;
