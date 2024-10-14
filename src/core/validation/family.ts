import * as Yup from 'yup';

interface Validation {
  [key: string]: any;
}

export const parentValidationSchema: Validation = {
  firstName: Yup.string().required('First Name is required!'),
  lastName: Yup.string().required('Last Name is required!'),
  age: Yup.number().required('Age is required!').min(1, 'Age must be more then 18'),
  maritalStatus: Yup.string().required('Marital status is required!'),
  annualIncome: Yup.string().required('Annual income is required!'),
  filingStatus: Yup.string().required('Filing Status is required!'),
};

export const studentValidationSchema = {
  name: Yup.string().required('Name is required!'),
  graduationYear: Yup.string().required('Graduation year is required!'),
  overallStudentType: Yup.string().required('Overall student type is required!'),
  gpa: Yup.string().required('GPA is required!'),
  sat: Yup.string().nullable(),
  act: Yup.string().nullable(),
  hasFiledTaxes: Yup.string().required('Has filed taxes is required!'),
  hasSavingsAccount: Yup.string().required('Has Saving account is required!'),
  savingsAmount: Yup.string().when('hasSavingsAccount', (hasSavingsAccount, schema) => {
    if (hasSavingsAccount[0] === 'Yes') return schema.required('Amount is required');
    return schema.nullable();
  }),

  hasIncome: Yup.string().required('Has income is required!'),
  incomeAmount: Yup.string().when('hasIncome', (hasIncome, schema) => {
    if (hasIncome[0] === 'Yes') return schema.required('Amount is required');
    return schema.nullable();
  }),

  hasTrustAccount: Yup.string().required('Has trust account is required!'),
};

export const familyOnboardingValidationSchema = {
  state: Yup.string().required('State is required!'),
  familyMembersCount: Yup.string().required('Family members count is required!'),
  familyMembersInCollege: Yup.string().required('Family members in college is required!'),
  hasInvestments: Yup.string().required('Has investments is required!'),
  checkingAmount: Yup.string().required('Checking amount is required!'),
  hasRetirementAccounts: Yup.string().required('Has retirement accounts is required!'),
  hasLifeInsuranceAccount: Yup.string().required('Has life insurance account is required!'),
  insuranceAmount: Yup.string().when(
    'hasLifeInsuranceAccount',
    (hasLifeInsuranceAccount, schema) => {
      if (hasLifeInsuranceAccount[0] === 'Yes') return schema.required('Amount is required');
      return schema.nullable();
    }
  ),
  hasTaxableBrokerageAccounts: Yup.string().required('Has taxable brokerage accounts is required!'),
  taxableBrokerageAccountsAmount: Yup.string().when(
    'hasTaxableBrokerageAccounts',
    (hasTaxableBrokerageAccounts, schema) => {
      if (hasTaxableBrokerageAccounts[0] === 'Yes') return schema.required('Amount is required');
      return schema.nullable();
    }
  ),
  hasCollegeSavingsAccounts: Yup.string().required('Has college savings accounts is required!'),
  collegeSavingsAccountsAmount: Yup.string().when(
    'hasCollegeSavingsAccounts',
    (hasCollegeSavingsAccounts, schema) => {
      if (hasCollegeSavingsAccounts[0] === 'Yes') return schema.required('Amount is required');
      return schema.nullable();
    }
  ),
  retirementPlan: Yup.string().required('Has college savings accounts is required!'),
  annualRetirementAmount: Yup.string().when('retirementPlan', (retirementPlan, schema) => {
    if (retirementPlan[0] === 'Yes') return schema.required('Amount is required');
    return schema.nullable();
  }),
  hasBusinessAssets: Yup.string().required('Has business assets is required!'),
  businessAssetsAmount: Yup.string().when('hasBusinessAssets', (hasBusinessAssets, schema) => {
    if (hasBusinessAssets[0] === 'Yes') return schema.required('Amount is required');
    return schema.nullable();
  }),

  hasAnnuities: Yup.string().required('Has annuities is required!'),
  annuitiesAmount: Yup.string().when('hasAnnuities', (hasAnnuities, schema) => {
    if (hasAnnuities[0] === 'Yes') return schema.required('Amount is required');
    return schema.nullable();
  }),

  ownsInvestmentProperty: Yup.string().required('Owns property is required!'),
  investmentEquity: Yup.string().when(
    'ownsInvestmentProperty',
    (ownsInvestmentProperty, schema) => {
      if (ownsInvestmentProperty[0] === 'Yes') return schema.required('Amount is required');
      return schema.nullable();
    }
  ),

  primaryResidence: Yup.string().required('Primary residence is required!'),
  residenceEquity: Yup.string().when('primaryResidence', (primaryResidence, schema) => {
    if (primaryResidence[0] === 'Own') return schema.required('Amount is required');
    return schema.nullable();
  }),

  isRealEstateLLCOrBusiness: Yup.string().nullable(),
  parents: Yup.array().of(Yup.object(parentValidationSchema)).required('Parents are required!'),
  students: Yup.array().of(Yup.object(studentValidationSchema)).required('Students are required!'),
};
