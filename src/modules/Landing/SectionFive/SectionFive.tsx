import React from 'react';

interface SectionFiveProps {}

const SectionFive: React.FC<SectionFiveProps> = (props) => {
  return (
    <div className="pt-14">
      <div className="max-w-5xl mx-auto flex flex-col px-8 lg:px-4">
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-tight lg:leading-none">
          Two Types Of <span className="text-mainBlue">Free Money</span> From The Schools
        </h2>
        <div className="mx-auto mt-16 text-dark">
          <p>
            Schools offer merit-based scholarships based on the merits of the student and need-based
            financial aid based on the financial of the family. Your financial aid eligibility is
            based on your Specialized Academic Instruction or SAI number.
          </p>
          <p className="mt-4">
            Do you know your SAI number? Our software will calculate your SAI number and show you
            how to lower your SAI number to increase your financial aid eligibility.
          </p>
          <p className="mt-4">
            Do you make too much money to qualify for financial aid? You can search for schools that
            like families with high SAI numbers and have a history of offering more merit-based
            scholarships.
          </p>
          <p className="mt-4">
            Either way, your SAI number has a HUGE impact on the cost of college, and we will help
            you calculate yours.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-mainBlue bg-opacity-10 flex justify-center items-center w-full pt-4 pb-20">
        <img src="/sectionFiveImage.png" className="rounded-xl" alt="report" />
      </div>
    </div>
  );
};

export default SectionFive;
