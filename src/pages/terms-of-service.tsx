import Typography from '@components/Typography/Typography';
import Footer from '@modules/Landing/Footer/Footer';
import Head from 'next/head';

const TermsOfService = () => {
  return (
    <div>
      <Head>
        <title>Terms Of Service</title>
      </Head>
      <div className="max-w-7xl mx-auto p-8 sm:py-20 sm:px-12 lg:px-4">
        <Typography variation="title0" className="sm:py-20 pb-8">
          Terms of Service for CollegeCostSecrets
        </Typography>
        <div className="space-y-8">
          <div className="space-y-4">
            <Typography variation="title2">1. Acceptance of Terms</Typography>
            <Typography color="dark">
              By using College Cost Secrets,you agree to these Terms of Service.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">2. OurServices</Typography>
            <Typography color="dark">
              We provide a platform where user scan input their data to receive their Federal
              SAI/Institutional SAI and get recommendations for college matches.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2"> 3. Restrictions</Typography>
            <Typography color="dark">You may not:</Typography>
            <ul className="pl-4 list-disc">
              <li>Use our platform for illegal or unauthorized purposes.</li>
              <li>Attempt to hack or disrupt our services.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">4. Data Selling</Typography>
            <Typography color="dark">
              Were serve the right to share or sell your data with third parties.While specifics are
              not disclosed here,rest assured that any sharing or selling complies with applicable
              laws and regulations.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">5. Disclaimer</Typography>
            <Typography color="dark">
              While we strive for accuracy, we do not guarantee the accuracy of our Federal
              SAI/Institutional SAI calculations or college recommendations.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">6. Termination</Typography>
            <Typography color="dark">
              We may terminate or suspend your access to our platform at our discretion.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">7. Changes to Terms</Typography>
            <Typography color="dark">
              We may change these Terms of Service at any time.Please review them regularly.
            </Typography>
          </div>
          <div className="space-y-4">
            <Typography variation="title2">8. Governing Law</Typography>
            <Typography color="dark">These terms are governed by the state of Utah</Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
