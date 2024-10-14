import React from 'react';

interface SectionFourProps {}

const SectionFour: React.FC<SectionFourProps> = (props) => {
  return (
    <div className="py-14 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col px-8 lg:px-4">
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-tight lg:leading-none">
          <span className="text-mainBlue">How you pay </span>
          for college is 10X more important than how much you pay!
        </h2>
        <div className="mx-auto mt-16 text-dark">
          <p>
            With our financial reports, you can see a breakdown of how much the schools may give you
            in grants and tuitions discounts. You can also see the cost of college with inflation
            and calculate your estimated out of pocket costs. We will also teach you new ways to
            save and pay for college so that you can help your students attend their dream schools
            without sacrificing your retirement.
          </p>
        </div>

        <div className="mt-8">
          <img src="/sectionFourImage.png" className="rounded-xl" alt="report" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
