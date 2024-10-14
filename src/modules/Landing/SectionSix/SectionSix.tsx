import React from 'react';

interface SectionSixProps {}

const SectionSix: React.FC<SectionSixProps> = (props) => {
  const {} = props;

  return (
    <div className="bg-[#F2FAE4;]">
      <div className="max-w-7xl mx-auto">
        <div className='bg-[url("/landing/section-two-bg.png")] bg-cover lg:bg-contain bg-no-repeat text-white'>
          <div className="mx-auto flex">
            <div className="py-20 px-10">
              <h2 className="font-bold text-[36px] lg:text-[64px] leading-tight lg:leading-none">
                We are teaming up with a <span className="text-mainBlue">Shark</span> from The Shark
                Tank!
              </h2>
              <p className="mt-6">
                Kevin Harrington was one of the original sharks from the hit TV show Shark Tank. We
                are teaming up with Kevin to spread the word to more families on how to reduce the
                cost of college and learn a new way to pay for it.
              </p>
            </div>
            <img
              alt="shark"
              src="/landing/shark-person.png"
              className="hidden lg:block object-contain h-[600px] -mt-[5%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
