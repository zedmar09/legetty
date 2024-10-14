import apiInstance from '@core/lib/axios';
import { Family } from '@typings/model/family';

interface AdminAggregates {
  agents: {
    total: number;
    percentage: number;
  };
  families: {
    total: number;
    today: number;
    percentage: number;
    directSignUp: number;
    byState: {
      family_state: string;
      familycount: string;
    }[];
  };
  admissionProfessionals: {
    total: number;
    percentage: number;
  };
  latestFamilies: Family[];
}

export const fetchAdminAggregates = () => {
  return apiInstance.get<AdminAggregates>(`admin/aggregates`);
};
