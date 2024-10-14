export interface College {
  id: string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mainPhone: string;
  admissionPhone: string;
  website: string;
  population: number;
  tuitionFee: number;
  tuitionFeeInState: number;
  tuitionFeeOutState: number;
  roomAndBoardFee: number;
  roomOnlyFee: number;
  foundedOn: number;
  campusSetting: string;
  applicationFee: number;
  maleAdmissions: MaleAdmissions;
  femaleAdmissions: FemaleAdmissions;
  admissionPolicies: AdmissionPolicies;
  requiredGpa: number;
  requiredSat: number;
  requiredAct: number;
  financialAidMet: number;
  giftAid: number;
  meritAid: number;
  collegeType: string;
  acceptanceRate: number;
  inunId: number;
}

export interface MaleAdmissions {
  applied: string;
  accepted: string;
}

export interface FemaleAdmissions {
  applied: string;
  accepted: string;
}

export interface AdmissionPolicies {
  openAdmission: boolean;
  preferentialAdmission: boolean;
  waitList: boolean;
}
