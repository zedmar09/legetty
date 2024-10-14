import Typography from '@components/Typography/Typography';
import Footer from '@modules/Landing/Footer/Footer';
import Head from 'next/head';

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="max-w-7xl mx-auto p-8 sm:py-20 sm:px-12 lg:px-4">
        <Typography variation="title0" className="sm:py-20 pb-8">
          Privacy Policy for College Cost Secrets
        </Typography>

        <div className="space-y-8">
          <div className="space-y-4">
            <Typography variation="title2">1. Introduction</Typography>
            <Typography color="dark">
              Welcome to College Cost Secrets. We are committed to protecting the privacy of our
              users. This Privacy Policy outlines how we collect, use, and disclose your
              information.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">2. Data Collection</Typography>
            <Typography color="dark">When you use our platform, we may collect:</Typography>
            <ul className="pl-4 list-disc">
              <li>Personal identifiers, such as name and contact details.</li>
              <li>Academic information, including grades and achievements.</li>
              <li>Financial information.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">3. Use of Data</Typography>
            <Typography color="dark">We use the data to:</Typography>
            <ul className="pl-4 list-disc">
              <li>Generate your Federal SAI/Institutional SAI.</li>
              <li>Recommend colleges that may be a good fit for you.</li>
              <li>Improve our platform and services.</li>
              <li>Improve our platform and services.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Typography variation="title2">4. Data Sharing</Typography>
            We may share your data with:
            <Typography color="dark"></Typography>
            <ul className="pl-4 list-disc">
              <li>Partner colleges and institutions.</li>
              <li>Third-party service providers.</li>
              <li>
                Potential data buyers, the specifics of which will be determined on a case-by-case
                basis.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">5. Your Rights</Typography>
            <Typography color="dark">You have the right to:</Typography>
            <ul className="pl-4 list-disc">
              <li>Access your data.</li>
              <li>Correct inaccuracies in your data.</li>
              <li>Delete your data.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
