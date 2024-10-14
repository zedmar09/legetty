import ArrowBackward from '@components/Icons/ArrowBackward';
import ArrowForwardIcon from '@components/Icons/ArrowForward';
import CloseIcon from '@components/Icons/CloseIcon';
import HelpIconOutline from '@components/Icons/HelpIconOutline';
import Modal from '@components/Modal/Modal';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { cn } from '@utils/style';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface OnboardingFooterProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onNextDisabled?: boolean;
  nextModuleText?: string;
  showNextModuleText?: boolean;
  doneOnboarding?: boolean;
  loading?: boolean;
}

const OnboardingFooter: React.FC<OnboardingFooterProps> = (props) => {
  const {
    onNext,
    onPrevious,
    onNextDisabled,
    nextModuleText,
    showNextModuleText,
    doneOnboarding,
    loading,
  } = props;

  const [federalSaiModalVisible, setFederalSAIModalVisible] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });

  const handlePrevious = () => {
    onPrevious?.();
  };

  const handleNext = () => {
    onNext?.();
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyPress);
  }

  let primaryButtonContent: React.ReactNode = null;

  if (loading) {
    primaryButtonContent = (
      <>
        <span className="loader-white" />
        <p />
      </>
    );
  } else if (doneOnboarding) {
    primaryButtonContent = (
      <>
        <p className="text-white">Finish Onboarding</p>
        <p />
      </>
    );
  } else {
    primaryButtonContent = (
      <>
        <p className="text-white">
          Next
          {showNextModuleText ? <strong>: {nextModuleText}</strong> : null}
        </p>
        {showNextModuleText ? <div /> : <ArrowForwardIcon />}
      </>
    );
  }

  return (
    <div className="pb-32">
      <Modal
        closeIcon={false}
        visible={federalSaiModalVisible}
        onClose={setFederalSAIModalVisible}
        className="w-full max-w-[358px]">
        <div className="bg-white rounded-lg pt-6 p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <div onClick={() => setFederalSAIModalVisible(false)} className="cursor-pointer">
              <CloseIcon />
            </div>
            <Typography variation="title3" className="font-bold">
              Estimated Financial Contribution
            </Typography>
          </div>
          <img src="/federal-sai-modal-image.png" alt="fedearl-sai-image" className="w-full" />
          <div className="text-dark">
            <p>
              Think of the “SAI” or &apos;Family Share&apos; like a budget estimate for college: If
              your family&apos;s &apos;Share&apos; is $15,000, that&apos;s the amount you&apos;re
              expected to pay for the year, and it helps colleges figure out how much more in grants
              and scholarships you need to cover the rest of the tuition and expenses
            </p>
            <p className="mt-4">
              For example - Let&apos;s say College A costs $30,000 per year to attend. After
              calculating your &apos;Family Share&apos; to be $10,000 based on your family&apos;s
              finances, College A will then use this number to offer you financial aid, potentially
              covering the remaining $20,000 with grants, loans, and scholarships.
            </p>
          </div>
        </div>
      </Modal>

      <div
        className={`fixed bottom-0 w-full space-y-4  pb-5 pt-3 border-t border-lightest3 bg-white`}>
        <div className="flex justify-center">
          <div className="flex justify-center md:max-w-[580px] px-4 sm:px-0 lg:-ml-[380px] w-full">
            <div className="text-dark">
              After completing these steps, you&apos;ll access your Family Share or Federal SAI.
            </div>
            <div onClick={() => setFederalSAIModalVisible(true)} className="cursor-pointer">
              <HelpIconOutline />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className={`flex justify-center px-6 md:px-0 md:max-w-[508px] lg:-ml-[380px] w-full md:space-x-6`}>
            <button
              type="button"
              disabled={loading}
              onClick={handlePrevious}
              className="text-darker hidden md:flex justify-between text-base bg-lightest3 sm:w-1/2 rounded-lg md:w-auto md:min-w-[246px] py-3.5 px-6">
              {isMobile ? (
                <>
                  <ArrowBackward />
                  <div className="inline-flex items-center justify-center flex-grow">
                    <span className="hidden sm:inline">Previous</span>
                  </div>
                </>
              ) : (
                <p className="text-center w-full">Previous</p>
              )}
              <p />
            </button>
            <button
              type="button"
              disabled={onNextDisabled || loading}
              onClick={handleNext}
              className={cn(
                'text-darker flex justify-between text-base bg-actionGreen rounded-lg w-full sm:w-1/2 md:w-auto md:min-w-[246px] py-3.5 px-6',
                onNextDisabled ? 'opacity-50 cursor-not-allowed' : null
              )}>
              <p />
              {primaryButtonContent}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFooter;
