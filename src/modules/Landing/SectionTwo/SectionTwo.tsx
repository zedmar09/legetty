import React from 'react';

interface SectionTwoProps {}

const SectionTwo: React.FC<SectionTwoProps> = (props) => {
  return (
    <div className="py-14 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col px-8 lg:px-4">
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-tight lg:leading-none">
          Search for schools that will be the <span className="text-mainBlue"> best </span>
          academic, social, and financial <span className="text-mainBlue">fit</span> !
        </h2>
        <div className="mx-auto mt-16 text-dark">
          <p>
            You may discover that your student can attend a high priced top tier private school for
            less than the local state school by finding the schools that offer your family the most
            scholarships and financial aid.
          </p>
        </div>

        <div className="mt-8">
          <img src="/sectionTwoimage.png" className="rounded-xl" alt="report" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
