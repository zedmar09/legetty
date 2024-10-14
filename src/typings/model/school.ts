export interface School {
  id: string;
  name: string;
  acceptanceRate: number;
  requiredGpa: number;
  requiredSat: number;
  requiredAct: number;
  maleAdmissions: {
    applied: string;
    accepted: string;
  };
  femaleAdmissions: {
    applied: string;
    accepted: string;
  };
}
