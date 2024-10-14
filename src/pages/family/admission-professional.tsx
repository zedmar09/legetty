import EmptyState from '@components/EmptyState/EmptyState';
import Typography from '@components/Typography/Typography';
import { fetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import Sidebar from '@modules/Family/Profile/Sidebar/Sidebar';
import { getImageUrl } from '@utils/common';
import Head from 'next/head';
import Image from 'next/image';

const AdmissionProfessional = () => {
  const professional = useAppSelector((state) => state.auth.family.admissionProfessional);
  const dispatch = useAppDispatch();

  const refreshProfessional = () => {
    dispatch(fetchFamilyProfile);
  };

  return (
    <div className="flex">
      <Head>
        <title>Admission Professional</title>
      </Head>
      <Sidebar />
      <div className="flex w-full">
        <div className="max-w-7xl mx-auto px-16 py-24 flex flex-col items-center space-y-6">
          {professional ? (
            <div className="flex flex-col  space-y-4 max-w-sm">
              <div className="relative mb-6 items-center">
                <Image
                  width={200}
                  height={200}
                  alt="User"
                  className="rounded-full"
                  src={getImageUrl(professional?.name)}
                />
              </div>
              <Typography variation="title1" className="font-bold text-center">
                {professional?.name}
              </Typography>
              <Typography className="">Email : {professional.email}</Typography>
              <Typography className="">Phone : {professional.phone}</Typography>
              <Typography className="">
                Last Active : {new Date(professional.lastLoginAt).toDateString()}
              </Typography>
            </div>
          ) : (
            <EmptyState
              title="No Admission Professional is Assigned"
              onActionClick={refreshProfessional}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionProfessional;
