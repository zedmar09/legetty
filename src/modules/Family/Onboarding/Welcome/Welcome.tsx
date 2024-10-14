import React from 'react';
import ReactPlayer from 'react-player';

import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { nextStep } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    dispatch(nextStep());
  };

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

        <div className="react-player-reset mt-6 lg:max-w-[540px]">
          <ReactPlayer style={{ width: 'auto !important' }} controls url="/welcome-video.mp4" />
        </div>

        <div className="flex justify-center w-full mt-4">
          <Button
            full
            variation="landing"
            className="rounded-md lg:max-w-[540px]"
            onClick={handleContinue}>
            Next:&nbsp;<strong>Household</strong>
          </Button>
        </div>
      </OnboardingContainer>
    </div>
  );
};

export default Welcome;
