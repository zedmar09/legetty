import React from 'react';
import ReactPlayer from 'react-player';

interface SectionOneProps {}

const SectionOne: React.FC<SectionOneProps> = (props) => {
  return (
    <div className="py-14">
      <div className="max-w-5xl mx-auto flex flex-col px-8 lg:px-4">
        <h2 className="font-sans text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-tight lg:leading-none">
          Ever made a wild financial choice to make your kids smile?{' '}
          <span className="text-mainBlue">You&apos;re not alone. Watch this!</span>
        </h2>
        <div className="mx-auto mt-16 text-dark">
          <p>
            Introducing College Cost Secrets: Empowering your next smart decision for their future.
          </p>
          <p className="mt-4">
            Welcome to College Cost Secrets! The first ever completely FREE software platform that
            helps your search for schools that will offer your student the most free money and show
            you how to maximize the free money from all the schools on your list.
          </p>
          <p className="mt-4">
            By reducing the cost of college, you can help your kids attend any school of their
            dreams without burying them in debt and without sacrificing your retirement.
          </p>
        </div>

        <div className="react-player-reset mt-8 rounded-lg overflow-hidden">
          <ReactPlayer controls url="/homepage.mp4" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
