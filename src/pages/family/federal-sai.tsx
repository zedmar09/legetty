import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { usdFormatter } from '@utils/common';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

const FederalSaiPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const family = useAppSelector((state) => state.auth.family);

  useEffect(() => {
    dispatch(refetchFamilyProfile());
  }, []);

  return (
    <div className="bg-white h-full">
      <Head>
        <title>Federal SAI</title>
      </Head>

      <div className="hidden sm:block bg-lightest4  mb-0 ">
        <div className="max-w-[680px] mx-auto py-8">
          <div className="flex flex-col sm:flex-row w-full px-10 md:px-0 space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="rounded-lg bg-white w-full">
              <div className="p-4 border-b border-lightest3 flex justify-between items-center">
                <Typography variation="title3" className="font-bold">
                  Your Estimated Federal SAI
                </Typography>
              </div>
              <div className="py-10">
                <Typography variation="title0" className="font-bold text-center text-[#2774bb]">
                  {family && usdFormatter.format(+family?.federal_sai)}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <img src="/federal-sai-bg.png" className="w-full h-[232px]" />
        <div className="max-w-[680px] mx-auto relative">
          <Typography className="text-title1 sm:text-title0 font-bold absolute bottom-[40px] left-0 text-white px-10 md:px-0">
            Your Estimated Federal SAI Number <br />
            <span className="sm:hidden text-title0">
              {family && usdFormatter.format(+family?.federal_sai)}
            </span>
          </Typography>
        </div>
      </div> */}

      <div className="bg-white px-10 pb-32 sm:pb-0">
        <div className="max-w-[680px] mx-auto pt-10 pb-8">
          <Typography variation="title1" className="font-bold">
            What&apos;s a SAI Number?
          </Typography>
          <Typography variation="description1" className="text-dark mt-6">
            This is a calculation colleges use to determine how much you will pay for college each
            year.
          </Typography>

          <Typography variation="description1" className="text-dark mt-6">
            For example <br />
            Let&apos;s say College A costs <strong>$30,000</strong> per year to attend. <br />
            Let’s say your SAI was <strong>$10,000</strong> (This is how much you are expected to
            pay for the year) <br />
            The remaining <strong>$20,000</strong>- You could potentially receive financial aid in
            the form of grants, loans, and scholarships from the colleges
          </Typography>
        </div>
      </div>

      <div className="border-t fixed bottom-0 left-0 right-0 px-4 sm:px-8 bg-white">
        <div className="max-w-[1024px] mx-auto py-4 sm:py-6 flex flex-col md:flex-row md:justify-between items-center space-y-2 sm:space-y-4 md:space-y-0 ">
          <Typography className="text-darker text-xs sm:text-paragraph sm:text-auto md:max-w-[80%] inline text-center md:text-left">
            Now that we&apos;ve figured out your SAI or Family Share, let&apos;s explore your
            kid&apos;s dream schools and uncover the costs and potential savings for each
          </Typography>
          <div className="w-full md:w-auto">
            <Link href="/family/college/search">
              <Button className="rounded-lg px-2 py-2 md:px-8 md:py-4 w-full">
                Search Colleges
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FederalSaiPage;
