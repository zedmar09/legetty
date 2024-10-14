import { Professional } from './admissionProfessional';
import { Agent } from './agent';
import { College } from './college';

export enum MaritalStatus {
  Married = 'Married',
  Single = 'Single',
  Divorced = 'Divorced',
}

export enum OverallStudentType {
  BelowAverage = 'Below Average',
  Average = 'Average',
  Good = 'Good',
  Excellent = 'Excellent',
  Exceptional = 'Exceptional',
}

export enum PrimaryResidence {
  Own = 'Own',
  Rent = 'Rent',
}

export enum FamilyInvitationStatus {
  Invited = 'invited',
  Onboarding = 'onboarding',
  Active = 'active',
}

export enum FilingStatus {
  Jointly = 'jointly',
  Separately = 'separately',
  Head = 'head',
}

export interface Family {
  id: string;
  name: string;
  email: string;
  state: string;
  familyMembersCount: number;
  familyMembersInCollege: number;
  primaryResidence: PrimaryResidence;
  residenceEquity: number | null;

  checkingAmount: number | null;
  hasTaxableBrokerageAccounts: boolean | null;
  taxableBrokerageAccountsAmount: number | null;

  hasCollegeSavingsAccounts: boolean;
  collegeSavingsAccountsAmount: number | null;
  retirementPlan: boolean;
  annualRetirementAmount: number | null;

  ownsInvestmentProperty: boolean;
  hasInvestments: boolean;
  agent: Agent;
  annualIncome: number;
  hasRetirementAccounts: number;
  // hasEquityInvestmentProperties: boolean;
  investmentEquity: number | string | null;
  isRealEstateLLCOrBusiness: boolean | null;
  invitationStatus: FamilyInvitationStatus;
  hasLifeInsuranceAccount: boolean;
  insuranceAmount: number;
  hasBusinessAssets: boolean;
  businessAssetsAmount: number;
  hasAnnuities: boolean;
  annuitiesAmount: number;
  parents: Parent[];
  students: Student[];
  favorites: Array<{
    id: string;
    college: College;
  }>;
  federal_sai: string;
  institutional_sai: string;
  createdAt: string;
  admissionProfessional: Professional;
  helpRequested: boolean;
}

export interface Parent {
  // local field (not coming from backend) for checking if we need to update or create parent, used inside Parents.tsx file.
  parentId: string;
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  maritalStatus: MaritalStatus;
  annualIncome: number;

  filingStatus: FilingStatus | null;
  standardDeduction: number | null;
  taxableIncome: number | null;
}

export interface Student {
  id?: string;
  name: string;
  graduationYear: string;
  overallStudentType: OverallStudentType;
  hasTrustAccount: boolean;
  gpa: number;
  sat: number;
  act: number;
  hasIncome: boolean;
  hasFiledTaxes: boolean;
  incomeAmount: number;
  hasSavingsAccount: boolean;
  savingsAmount: number;
  favouriteColleges?: {
    id: string;
    college: College;
  }[];
}
