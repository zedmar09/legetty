import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="hidden md:block bg-[url('/assets/login-background.png')] bg-amber-600 bg-opacity-90 md:w-1/2 flex-grow h-[296px] md:h-screen bg-cover">
      <div className="h-full md:h-screen bg-mainBlue opacity-[85%] flex flex-col py-5 md:pt-[40%] items-center">
        <Image src="/assets/logo.png" height={70} width={149} alt="Logo" />
        <p className="mt-10 md:text-2xl text-center font-montserrat font-light text-white">
          Secure your child&apos;s future with
          <br /> a few clicks and taps.
        </p>
      </div>
    </div>
  );
};

export default Banner;
