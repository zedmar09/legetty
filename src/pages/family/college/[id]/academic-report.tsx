import ArrowForwardIcon from '@components/Icons/ArrowForward';
import Typography from '@components/Typography/Typography';
import { useAppSelector } from '@core/redux/store';
import API from '@core/services';
import AcademicScores from '@modules/Family/Colleges/CollegeDetails/AcademicScores';
import DetailsFooter from '@modules/Family/Colleges/CollegeDetails/DetailsFooter';
import DetailsHeader from '@modules/Family/Colleges/CollegeDetails/DetailsHeader';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const cardData = [
  {
    title: 'Academic GPA',
    rank: 5,
    requirement: 'Very Important',
  },
  {
    title: 'Standardized Test Scores',
    rank: 5,
    requirement: 'Very Important',
  },
  {
    title: 'Class rank & recommendation',
    rank: 3,
    requirement: 'Considered',
  },
  {
    title: 'Application Essay',
    rank: 0,
    requirement: 'Not Considered',
  },
];

const AcademicReport = () => {
  const router = useRouter();

  const { isLoading, isError, data } = useQuery(['family/colleges/details'], () =>
    API.family.college.fetchCollege(router?.query?.id)
  );

  const selectedStudent = useAppSelector((state) => state.family.selectedStudent);

  return (
    <Fragment>
      <DetailsHeader collegeData={data} reportType="Academic Report" />
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-lightest3">
          {' '}
          <Typography variation="title2" className="font-bold text-darker mt-8 mb-4">
            Academic Report{' '}
          </Typography>{' '}
        </div>
        <AcademicScores collegeData={data} />
        <div className="grid grid-cols-2 space-x-4 my-6">
          <div className="border border-lightest3 rounded-lg h-fit">
            <div className="divide-y divide-lightest3">
              <div className="grid grid-cols-5 gap-2">
                <Typography
                  variation="description1"
                  className="font-bold col-span-2 border-r px-6 py-4">
                  Test Scores
                </Typography>
                <Typography variation="description1" className="border-r font-bold px-6 py-4">
                  25th%
                </Typography>
                <Typography variation="description1" className="border-r font-bold px-6 py-4">
                  75th%
                </Typography>
                <Typography variation="description1" className="font-bold px-6 py-4">
                  Average
                </Typography>
              </div>
              <div className="grid grid-cols-5 gap-2 ">
                <Typography
                  variation="description1"
                  className="border-r px-6 py-4 font-bold col-span-2">
                  SAT Critical Reading
                </Typography>
                <Typography className="border-r px-6 py-4">550</Typography>
                <Typography className="border-r px-6 py-4">660</Typography>
                <Typography className="px-6 py-4">595</Typography>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <Typography
                  variation="description1"
                  className="border-r px-6 py-4 font-bold col-span-2">
                  SAT Math
                </Typography>
                <Typography className="border-r px-6 py-4">530</Typography>
                <Typography className="border-r px-6 py-4">660</Typography>
                <Typography className="px-6 py-4">585</Typography>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <Typography
                  variation="description1"
                  className="border-r px-6 py-4 font-bold col-span-2">
                  SAT Composite
                </Typography>
                <Typography className="border-r px-6 py-4">1090</Typography>
                <Typography className="border-r px-6 py-4">1300</Typography>
                <Typography className="px-6 py-4">1195</Typography>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <Typography
                  variation="description1"
                  className="border-r px-6 py-4 font-bold col-span-2">
                  ACT Composite
                </Typography>
                <Typography className="border-r px-6 py-4">1090</Typography>
                <Typography className="border-r px-6 py-4">1300</Typography>
                <Typography className="px-6 py-4">1195</Typography>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {cardData.map((item, index) => (
              <div key={index} className="border rounded-lg py-6 px-3 flex flex-col items-center">
                <Typography variation="title3" className="text-darker text-base">
                  {item.title}
                </Typography>
                <Typography variation="description1" className="text-dark mt-5">
                  {item.requirement}
                </Typography>
                <div className="space-x-2 flex mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      key={index}
                      className={`h-4 w-4 rounded-full ${
                        idx + 1 <= item?.rank ? 'bg-[#008000]' : 'bg-[#DDDDDD] '
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Link href={`/family/college/${router.query?.id}/financial-report`}>
            <div className="bg-lightest4 text-darker space-x-2  items-center font-semibold flex p-4 w-fit rounded-lg mt-9 mb-12">
              <span>View Financial Report</span>
              <ArrowForwardIcon fill="#161616" />
            </div>
          </Link>
        </div>
      </div>
      <DetailsFooter
        text={`We are confident that ${
          selectedStudent?.name.split(' ')[0]
        } can get into the University of Florida with a little push`}
      />
    </Fragment>
  );
};

export default AcademicReport;
