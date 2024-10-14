import CCSLoader from '@components/CCSLoader/CCSLoader';
import Typography from '@components/Typography/Typography';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FederalSaiCalculationPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/family/federal-sai');
    }, 3000);
  }, []);

  return (
    <div className="w-full fixed inset-0 z-50 h-screen flex flex-col justify-center items-center bg-black">
      <CCSLoader />
      <Typography variation="title2" className="font-bold text-white mt-8">
        Calculating Federal SAI Score...
      </Typography>
    </div>
  );
};

export default FederalSaiCalculationPage;
