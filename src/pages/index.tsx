import Footer from '@modules/Landing/Footer/Footer';
import Hero from '@modules/Landing/Hero/Hero';
import SectionEight from '@modules/Landing/SectionEight/SectionEight';
import SectionFive from '@modules/Landing/SectionFive/SectionFive';
import SectionFour from '@modules/Landing/SectionFour/SectionFour';
import SectionOne from '@modules/Landing/SectionOne/SectionOne';
import SectionSeven from '@modules/Landing/SectionSeven/SectionSeven';
import SectionSix from '@modules/Landing/SectionSix/SectionSix';
import SectionThree from '@modules/Landing/SectionThree/SectionThree';
import SectionTwo from '@modules/Landing/SectionTwo/SectionTwo';
import { NextPage } from 'next';
import Head from 'next/head';

const IndexPage: NextPage = () => {
  return (
    <div className="font-[Epilogue] pt-[80px] md:pt-[100px]'">
      <Head>
        <title>College Cost Secrets - Home</title>
      </Head>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
};

export default IndexPage;
