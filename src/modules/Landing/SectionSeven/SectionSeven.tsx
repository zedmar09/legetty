import Button from '@components/Button/Button';
import Link from 'next/link';
import React from 'react';

interface SectionSevenProps {}

const SectionSeven: React.FC<SectionSevenProps> = (props) => {
  const {} = props;

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 px-8 lg:px-4">
          <img className="w-full lg:w-1/2" src="/landing/section-three-image.png" alt="family" />
          <div className="w-full lg:w-1/2">
            <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-none mt-8 lg:mt-0">
              Lance Morgan
            </h2>
            <p className="mt-10">
              As a father of 5 kids, the high cost of college kept me up at night as I worried about
              how I was going to be able to help them pay for college.
            </p>
            <p className="mt-4">
              I couldn&apos;t imagine how I could help them without sacrificing our retirement.
            </p>
            <p className="mt-4">
              That is, until I discovered the 4 College Funding Secrets to reduce the cost of
              college and The Retirement Scholarship Strategy.
            </p>
            <Link href="/family/signup">
              <Button variation="landing" className="mt-10 w-full md:w-auto">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
