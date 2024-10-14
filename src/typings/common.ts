import { CollegeFilters } from './filters/college';

export interface BulkUpdateResponse {
  affected: number;
}

export interface ListResponse {
  totalRecords: number;
}

export interface FirebaseTokens {
  accessToken: string;
  refreshToken: string;
}

export interface SavedSearch {
  id: number;
  filters: CollegeFilters;
}

export interface UpdateProfileProps {
  name: string;
  email: string;
  phone: string;
}
