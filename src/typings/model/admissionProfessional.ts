import { Family } from './family';

export enum ProfessionalStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BANNED = 'banned',
  INVITED = 'invited',
  REMOVED = 'removed',
}

export interface Professional {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: ProfessionalStatus;
  createdAt: string;
  updatedAt: string;
  familyCount: number;
  families: Family[];
  lastLoginAt: string;
}
