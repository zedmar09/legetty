import ArrowForwardIcon from '@components/Icons/ArrowForward';
import Typography from '@components/Typography/Typography';
import API from '@core/services';
import DetailsFooter from '@modules/Family/Colleges/CollegeDetails/DetailsFooter';
import DetailsHeader from '@modules/Family/Colleges/CollegeDetails/DetailsHeader';
import FinancialReportTable from '@modules/Family/Colleges/CollegeDetails/FinancialReportTable';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const FinancialReport = () => {
  const router = useRouter();

  const {
    isLoading,
    isError,
    data: collegeData,
  } = useQuery(['family/colleges/details'], () =>
    API.family.college.fetchCollege(router?.query?.id)
  );

  return (
    <Fragment>
      <DetailsHeader collegeData={collegeData} reportType="Financial Report" />

      <div className="max-w-5xl mx-auto">
        <div className="border-b border-lightest3">
          {' '}
          <Typography variation="title2" className="font-bold text-darker mt-8 mb-4">
            Financial Report{' '}
          </Typography>{' '}
        </div>
        {collegeData && <FinancialReportTable collegeData={collegeData} />}
        <div className="flex justify-end">
          <Link href={`/family/college/${router.query?.id}/academic-report`}>
            <div className="bg-lightest4 text-darker space-x-2 items-center font-semibold flex p-4 w-fit rounded-lg mt-9 mb-12">
              <span>View Academic Report</span>
              <ArrowForwardIcon fill="#161616" />
            </div>
          </Link>
        </div>
      </div>
      <DetailsFooter text="Schedule a call to help save on college" />
    </Fragment>
  );
};

export default FinancialReport;
