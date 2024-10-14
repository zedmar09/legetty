import { paginationConfig } from '@core/config/app';
import apiInstance from '@core/lib/axios';
import { ListResponse } from '@typings/common';
import { Family } from '@typings/model/family';

const INVITE_FAMILY_ROUTE = '/agents/invite-family';
const FETCH_FAMILIES_ROUTE = '/agents/families';

interface GetFamilyResponse extends ListResponse {
  families: Family[];
}

interface InviteFamilyParams {
  parent1Name: string;
  phone: string;
  email: string;
}

export const inviteFamily = (params: InviteFamilyParams) => {
  return apiInstance.post<Family>(`${INVITE_FAMILY_ROUTE}`, params);
};

interface fetchFamilyParams {
  data: Family[];
  totalRecords: number;
}

export const fetchFamilies = (params: { page: number }) => {
  const { page } = params;
  return apiInstance.get<fetchFamilyParams>(
    `${FETCH_FAMILIES_ROUTE}?page=${page}&limit=${paginationConfig.pageSize}`
  );
};

export const fetchFamily = (familyId: string) => {
  return apiInstance.get<Family>(`${FETCH_FAMILIES_ROUTE}/${familyId}`);
};
