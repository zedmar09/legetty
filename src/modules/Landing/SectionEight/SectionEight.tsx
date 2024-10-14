import BankIcon from '@components/Icons/BankIcon';
import RocketIcon from '@components/Icons/RocketIcon';
import RotatingDollar from '@components/Icons/RotatingDollar';
import Typography from '@components/Typography/Typography';
import React from 'react';

interface SectionEightProps {}

const SectionEight: React.FC<SectionEightProps> = () => {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-8 lg:px-4">
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold  leading-tight lg:leading-none">
          What makes
        </h2>
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-tight lg:leading-none">
          College Cost Secrets <span className="text-mainBlue">Unique?</span>
        </h2>
        <div className="mx-auto mt-16 text-dark">
          <p>
            Most companies only focus on helping families find scholarships, financial aid, and
            helping kids get accepted to their dream schools.
          </p>
          <p className="mt-4">Legetty and College Funding Secrets does all of that and more!</p>
          <p className="mt-4">
            We also help families reduce the college loans, use The Retirement Scholarship Strategy
            to pay for college and get all the money back during retirement, and restore your
            retirement from helping your kids pay for college.
          </p>
        </div>
        <div className="mt-6">
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y- lg:space-y-0">
            <div className="bg-white rounded-lg w-full">
              <div>
                <div className="flex flex-col px-6 py-4 md:flex-row md:items-center border-b">
                  <div className="bg-[#F2FAE4] rounded-full mr-auto md:mr-0 mb-4 md:mb-0 p-2">
                    <RotatingDollar />
                  </div>
                  <Typography className="ml-0 md:ml-4" variation="title2">
                    Maximize The Free Money From The Schools
                  </Typography>
                </div>
                <Typography variation="paragraph" className="font-sans text-dark px-6 py-4">
                  The majority of the free money comes from the schools in the form of merit based
                  scholarships and need based financial aid. We can help you increase your
                  scholarships and financial aid by choosing the schools that offer the most free
                  money based on your specific situation.
                </Typography>
              </div>
            </div>
            <div className="bg-white rounded-lg w-full">
              <div>
                <div className="flex flex-col px-6 py-4 md:flex-row md:items-center border-b">
                  <div className="bg-[#F2FAE4] rounded-full mr-auto md:mr-0 mb-4 md:mb-0 p-2">
                    <BankIcon />
                  </div>
                  <Typography className="ml-0 md:ml-4" variation="title2">
                    Reduce Your College Loans
                  </Typography>
                </div>
                <Typography variation="paragraph" className="font-sans text-dark px-6 py-4">
                  If you could reduce your college loans, isn&apos;t that the same as reducing the
                  cost of college? The cost of college is like buying a new car every year. How you
                  &quot;finance&quot; college could save you more money than scholarships or
                  financial aid.
                </Typography>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg w-full mt-6">
            <div>
              <div className="flex flex-col px-6 py-4 md:flex-row md:items-center border-b">
                <div className="bg-[#F2FAE4] rounded-full p-2">
                  <RocketIcon />
                </div>
                <Typography className="ml-0 md:ml-4" variation="title2">
                  The Retirement Scholarship Strategy
                </Typography>
              </div>
              <Typography variation="paragraph" className="font-sans text-dark px-6 pt-4 pb-8">
                Imagine a new strategy that allows you to help your kids pay for college and get all
                your money back to use in retirement. Sounds too good to be true doesn&apos;t it?
                The fact is, how you pay for college is 10x more important than how much you pay.
                Scholarships are nice but imagine getting the entire cost of college back.
                That&apos;s the Retirement Scholarship Strategy. You can learn how this strategy
                works on our live workshop. aid.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
