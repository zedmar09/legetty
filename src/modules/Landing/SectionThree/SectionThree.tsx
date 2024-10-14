import React from 'react';

interface SectionThreeProps {}

const SectionThree: React.FC<SectionThreeProps> = (props) => {
  return (
    <div className="py-14">
      <div className="max-w-5xl mx-auto flex flex-col px-8 lg:px-4">
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-tight lg:leading-none">
          Get accepted to your <br />
          <span className="text-mainBlue">dream school!</span>
        </h2>
        <div className="mx-auto mt-16 text-dark">
          <p>
            Drill down into the details of each school on your list and discover what it takes to
            get accepted to your dream school. Need help understanding enrollment management and how
            to increase your odds of getting accepted to your dream school? Check out our resources
            section for help from our experts.
          </p>
        </div>
        <div className="mt-8">
          <img src="/sectionThreeImage.png" className="rounded-xl" alt="report" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
