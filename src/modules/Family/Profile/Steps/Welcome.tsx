import Typography from '@components/Typography/Typography';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import React from 'react';
import ReactPlayer from 'react-player';

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <div className="bg-white">
      <OnboardingContainer>
        <Typography variation="title0" bold className="text-darker">
          Welcome
        </Typography>
        <Typography variation="paragraph" className="mt-6 text-dark">
          This shouldn&apos;t take more than twenty minutes to complete. All information you enter
          will be automatically saved.{' '}
        </Typography>

        <div className="react-player-reset mt-6 ">
          <ReactPlayer controls url="/welcome-video.mp4" />
        </div>
      </OnboardingContainer>
    </div>
  );
};

export default Welcome;
