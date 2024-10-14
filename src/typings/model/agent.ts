import { Family } from './family';

export enum AgentStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BANNED = 'banned',
  INVITED = 'invited',
  REMOVED = 'removed',
}

export interface Agent {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: AgentStatus;
  createdAt: string;
  updatedAt: string;
  familyCount: number;
  families: Family[];
  lastLoginAt: string;
}
