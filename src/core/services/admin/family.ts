import { paginationConfig } from '@core/config/app';
import apiInstance from '@core/lib/axios';
import { ListResponse } from '@typings/common';
import { Family } from '@typings/model/family';

const FAMILY_ROUTE = '/admin/families';

interface GetFamilyResponse extends ListResponse {
  families: Family[];
}

interface FetchFamilyParams {
  search?: string;
  notRequestedHelp: string;
  page: string;
  limit?: string;
}

export const fetchFamilies = (params: FetchFamilyParams) => {
  let query = '?';
  if (params?.search) {
    query += `search=${params.search}&`;
  }
  if (params?.notRequestedHelp === '1') {
    query += `notRequestedHelp=1&`;
  }
  if (params?.page && !params?.search) {
    query += `page=${params?.page}&`;
  }
  query += `limit=${paginationConfig.pageSize}&`;

  return apiInstance.get<GetFamilyResponse>(`/admin/families${query}`);
};

export const fetchFamily = (familyId: string) => {
  return apiInstance.get<Family>(`${FAMILY_ROUTE}/${familyId}`);
};

export const familyCountWithoutAgents = () => {
  return apiInstance.get<{ count: number }>(`${FAMILY_ROUTE}/not-requested-help`);
};
