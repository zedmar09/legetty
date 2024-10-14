import { MaritalStatus, OverallStudentType, PrimaryResidence } from './model/family';

export type OnBoardingFields = {
  state: string | null;
  familyMembersCount: string | null;
  familyMembersInCollege: string | null;
  parents: OnboardingParent[] | null;
  primaryResidence: PrimaryResidence | null;
  residenceEquity: string | null;
  investmentEquity: string | null;
  ownsInvestmentProperty: string | null;

  isRealEstateLLCOrBusiness: string | null;

  hasLifeInsuranceAccount: string | null;
  insuranceAmount: string | null;
  hasBusinessAssets: string | null;
  businessAssetsAmount: string | null;
  hasAnnuities: string | null;
  annuitiesAmount: string | null;
  students: OnboardingStudent[] | null;

  checkingAmount: string | null;
  hasTaxableBrokerageAccounts: string | null;
  taxableBrokerageAccountsAmount: string | null;
  hasCollegeSavingsAccounts: string | null;
  collegeSavingsAccountsAmount: string | null;
  retirementPlan: string | null;
  annualRetirementAmount: string | null;
};

export interface OnboardingParent {
  parentId?: string;
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  maritalStatus: MaritalStatus | null;
  annualIncome: string | null;

  filingStatus: string | null;
  standardDeduction: number | null;
  taxableIncome: number | null;
}

export interface OnboardingStudent {
  studentId?: string;
  name: string | null;
  graduationYear: string | null;
  overallStudentType: OverallStudentType | null;
  hasTrustAccount: string | null;
  gpa: string | null;
  sat: string | null;
  act: string | null;
  hasFiledTaxes: string | null;
  hasIncome: string | null;
  incomeAmount: string | null;
  hasSavingsAccount: string | null;
  savingsAmount: string | null;
}
