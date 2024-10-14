import Typography from '@components/Typography/Typography';
import { useAppSelector } from '@core/redux/store';
import Sidebar from '@modules/Family/Profile/Sidebar/Sidebar';
import Household from '@modules/Family/Profile/Steps/Household';
import HouseHoldFinance from '@modules/Family/Profile/Steps/HouseholdFinance';
import Parents from '@modules/Family/Profile/Steps/Parents';
import Student from '@modules/Family/Profile/Steps/Student';
import Welcome from '@modules/Family/Profile/Steps/Welcome';
import { cn } from '@utils/style';
import Head from 'next/head';
import { useState } from 'react';

const steps = [
  <Welcome key="welcome" />,
  <Household key="household" />,
  <Parents key="parents" />,
  <HouseHoldFinance key="household-finance" />,
  <Student key="student" />,
];

const FamilyProfile = () => {
  const onboarding = useAppSelector((state) => state.auth.onboarding);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex">
      <Head>
        <title>Profile</title>
      </Head>
      <Sidebar />
      <div className="w-full">
        <div className="flex">
          {onboarding.steps.map((step, index) => {
            return (
              <div
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  'w-full py-6 flex justify-center items-center border-b cursor-pointer',
                  currentStep === index && 'border-mainBlue border-b-4'
                )}>
                <Typography variation="title3" color="darker">
                  {step.title}
                </Typography>
              </div>
            );
          })}
        </div>
        <div>{steps[currentStep]}</div>
      </div>
    </div>
  );
};

export default FamilyProfile;
