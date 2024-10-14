import Household from '@modules/Family/Onboarding/Household/Household';
import HouseholdFinance from '@modules/Family/Onboarding/HouseholdFinance/HouseholdFinance';
import Parents from '@modules/Family/Onboarding/Parents/Parents';
import Students from '@modules/Family/Onboarding/Students/Students';
import Welcome from '@modules/Family/Onboarding/Welcome/Welcome';

export const stepsToComponentMapping = [
  <Welcome key="welcome" />,
  <Household key="household" />,
  <Parents key="parents" />,
  <HouseholdFinance key="household-finance" />,
  <Students key="students" />,
];
