import Button from '@components/Button/Button';
import ReloadIcon from '@components/Icons/ReloadIcon';
import { showToast } from '@core/config/toast';
import { fetchAdminAggregates } from '@core/redux/reducers/adminSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import Graph from '@modules/admin/dashboard/Graph';
import LatestFamilyTable from '@modules/admin/dashboard/LatestFamilyTable';
import StateMap from '@modules/admin/dashboard/StateMap';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Typography from '../../components/Typography/Typography';
const { format } = require('date-fns');

const customFormat = (date) => {
  const month = format(date, 'MMMM');
  const day = format(date, 'do');
  return `${month} ${day}`;
};

const Home: NextPage = () => {
  const date = new Date();
  const authName = useAppSelector((state) => state.auth.authName);
  const dispatch = useAppDispatch();
  const adminAggregates = useAppSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminAggregates());
  }, []);
  const toDate = customFormat(date);

  const refetchDashboard = () => {
    dispatch(fetchAdminAggregates());
    showToast('Successfully, refresh Admin data');
  };

  if (adminAggregates) {
    return (
      <div className="bg-lightest4 min-h-screen admin-dashboard px-4 h-full">
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="flex justify-center">
          <div className="py-14 max-w-7xl w-full">
            <div className="flex items-center justify-between mb-12">
              <div>
                <Typography variation="title1">Admin Dashboard</Typography>
                <Typography>Welcome back, {authName}! We&apos;ve missed you</Typography>
              </div>
              <div className="flex items-center space-x-4">
                <div
                  onClick={refetchDashboard}
                  className="py-3 px-4 bg-white rounded-lg border cursor-pointer">
                  {adminAggregates?.fetchingAggregates ? (
                    <div className="loader"></div>
                  ) : (
                    <ReloadIcon />
                  )}
                </div>
                <Button onClick={() => {}} className="w-full py-3 px-6">
                  Today: {toDate}
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Typography variation="title2" className="text-darker">
                        Families
                      </Typography>
                      <Link href="/admin/families" className="text-description1 text-mainBlue">
                        VIEW
                      </Link>
                    </div>
                  </div>
                  <Typography variation="title1" className="text-darker">
                    {adminAggregates.families.total}
                  </Typography>
                  <div className="text-left mt-6">
                    <div className="flex space-x-2">
                      {adminAggregates?.families?.percentage < 0 ? (
                        <div className="bg-[#FFE5E5] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none text-red">
                            - {Math.trunc(adminAggregates?.families?.percentage)} %
                          </Typography>
                        </div>
                      ) : (
                        <div className="bg-[#C7E1C7] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none">
                            + {Math.trunc(adminAggregates?.families?.percentage)} %
                          </Typography>
                        </div>
                      )}
                      <Typography variation="description1" className="text-dark mr-2">
                        Since last week
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Typography variation="title2" className="text-darker">
                      New Families Toady
                    </Typography>
                    <Link href="/admin/families" className="text-description1 text-mainBlue">
                      VIEW
                    </Link>
                  </div>
                  <Typography variation="title1" className="text-darker">
                    {adminAggregates?.families?.today}
                  </Typography>
                  <div className="text-left mt-6">
                    <div className="flex space-x-2">
                      {adminAggregates?.families?.percentage < 0 ? (
                        <div className="bg-[#FFE5E5] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none text-red">
                            - {Math.trunc(adminAggregates?.families?.percentage)} %
                          </Typography>{' '}
                        </div>
                      ) : (
                        <div className="bg-[#C7E1C7] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none">
                            + {Math.trunc(adminAggregates?.families?.percentage)} %
                          </Typography>
                        </div>
                      )}
                      <Typography variation="description1" className="text-dark mr-2">
                        Since last week
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Typography variation="title2" className="text-darker">
                      Financial Agents
                    </Typography>
                    <Link href="/admin/agents" className="text-description1 text-mainBlue">
                      VIEW
                    </Link>
                  </div>
                  <Typography variation="title1" className="text-darker">
                    {adminAggregates?.agents?.total}
                  </Typography>
                  <div className="text-left mt-6">
                    <div className="flex space-x-2">
                      {adminAggregates?.agents?.percentage < 0 ? (
                        <div className="bg-[#FFE5E5] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none text-red">
                            - {Math.trunc(adminAggregates?.agents?.percentage)} %
                          </Typography>{' '}
                        </div>
                      ) : (
                        <div className="bg-[#C7E1C7] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none">
                            + {Math.trunc(adminAggregates?.agents?.percentage)} %
                          </Typography>
                        </div>
                      )}
                      <Typography variation="description1" className="text-dark mr-2">
                        Since last week
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Typography variation="title2" className="text-darker">
                      Admission Agents
                    </Typography>
                    <Link
                      href="/admin/admission-professionals"
                      className="text-description1 text-mainBlue">
                      VIEW
                    </Link>
                  </div>
                  <Typography variation="title1" className="text-darker">
                    {adminAggregates?.admissionProfessionals?.total}
                  </Typography>
                  <div className="text-left mt-6">
                    <div className="flex space-x-2">
                      {adminAggregates?.admissionProfessionals?.percentage < 0 ? (
                        <div className="bg-[#FFE5E5] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none text-red">
                            - {Math.trunc(adminAggregates?.admissionProfessionals?.percentage)} %
                          </Typography>
                        </div>
                      ) : (
                        <div className="bg-[#C7E1C7] text-positiveAction p-1.5 rounded-lg">
                          <Typography variation="description2" className="leading-none">
                            + {Math.trunc(adminAggregates?.admissionProfessionals?.percentage)} %
                          </Typography>
                        </div>
                      )}
                      <Typography variation="description1" className="text-dark mr-2">
                        Since last week
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              <LatestFamilyTable />
            </div>

            <div className="grid md:grid-cols-7 gap-4 pt-5">
              <div className="md:col-span-4">
                <StateMap />
              </div>
              <div className="md:col-span-3 h-full">
                <Graph />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className=""></div>;
};

export default Home;
