import Button from '@components/Button/Button';
import Link from 'next/link';
import React from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-10 px-4 md:px-12 lg:px-4">
        <div className="flex items-center">
          <div className="md:mr-10 w-full">
            <h1 className="text-darker text-[48px] md:text-[64px] lg:text-[72px] leading-none font-bold font-[Epilogue] lg:min-w-[450px]">
              Need Help <span className="text-mainBlue">Reducing</span> the Cost of College?
            </h1>
            <p className="mt-8">
              By reducing the cost of college, you can help your kids attend any school of their
              dreams without burying them in debt and without sacrificing your retirement.
            </p>
            <Link href="/family/signup">
              <Button variation="landing" className="font-[Epilogue] mt-7 w-full lg:w-auto">
                Get Started Now
              </Button>
            </Link>
          </div>
          <div className="hidden lg:block">
            <img src="/landing/hero-bg-min.jpeg" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
