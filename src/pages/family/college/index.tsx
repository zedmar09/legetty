import Typography from '@components/Typography/Typography';
import Scores from '@modules/Family/Colleges/Scores/Scores';
import SpecificCollege from '@modules/Family/Colleges/SpecificCollege/SpecificCollege';
import { cn } from '@utils/style';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CollegePage: NextPage = () => {
  const [tab, setTab] = useState('scores');

  const router = useRouter();

  useEffect(() => {
    if (!router.query.tab) {
      router.replace('/family/college?tab=scores');
    } else {
      setTab(router.query.tab as string);
    }
  }, [router.query.tab]);

  return (
    <div className="bg-white">
      <Head>
        <title>College</title>
      </Head>
      <div className="bg-[url(/college-bg.png)]  bg-no-repeat bg-cover  w-full h-[232px] bg-black bg-opacity-90">
        <div className="max-w-[680px] mx-auto flex items-end max-h-full h-full">
          <div className="bottom-[0px] left-0 w-full text-white">
            <Typography className="font-bold text-title2 xs:text-title0 left-0 px-8 lg:px-0">
              College Search
            </Typography>

            <div className="inline-flex">
              <Link href="/family/college?tab=scores" replace shallow>
                <div
                  className={cn(
                    `relative after:border-t-4 after:rounded-t-[4px] py-5 mb-1 after:absolute after:w-full after:top-full flex items-center ${
                      tab == 'scores' ? 'after:border-mainBlue' : 'after:border-transparent'
                    }`
                  )}>
                  <Typography variation="title3" className="w-[164px] text-center">
                    Filter
                  </Typography>
                </div>
              </Link>

              <Link href="/family/college?tab=specific-college" replace shallow>
                <div
                  className={cn(
                    `relative after:border-t-4 after:rounded-t-[4px] py-5 mb-1 after:absolute after:w-full after:top-full flex items-center ${
                      tab == 'specific-college'
                        ? 'after:border-mainBlue'
                        : 'after:border-transparent'
                    }`
                  )}>
                  <Typography variation="title3" className="w-[164px] text-center">
                    Specific College
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {tab !== 'scores' ? <SpecificCollege /> : <Scores />}
      <div className="mt-10 max-w-[680px] mx-auto px-8 md:px-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-x-6">
          <img src="/hero1.png" className="h-full w-full sm:w-1/2" />
          <div>
            <Typography variation="title1" className="font-bold">
              Save your favorites
            </Typography>
            <Typography variation="paragraph" className="mt-4 text-dark">
              By saving your college search, you can take proactive steps towards improving your
              financial health and better prepare for your children&apos;s education expenses.
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center space-y-4 mt-10 pb-14">
          <img src="/hero2.png" className="h-full w-full sm:w-1/2" />
          <div className="sm:mr-6">
            <Typography variation="title1" className="font-bold">
              Plan ahead
            </Typography>
            <Typography variation="paragraph" className="mt-4 text-dark">
              By saving your college search, you can plan ahead and make informed decisions about
              your child&apos;s future education, ultimately helping them to achieve their academic
              goals.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePage;
