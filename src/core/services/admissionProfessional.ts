import { paginationConfig } from '@core/config/app';
import { BulkUpdateResponse } from '@typings/common';
import { Professional } from '@typings/model/admissionProfessional';
import { Family } from '@typings/model/family';
import apiInstance from '../lib/axios';

const ADMISSION_PROFESSIONALS_ROUTE = '/admin/admission-professionals';

// export const fetchAdmissionProfessionals = async () => {
//   return apiInstance.get<Professional[]>(ADMISSION_PROFESSIONALS_ROUTE);
// };

interface fetchAdmissionProfessionalsProps {
  data: Professional[];
  totalRecords: number;
}

export const fetchAdmissionProfessionals = async (params: { page: number }) => {
  return apiInstance.get<fetchAdmissionProfessionalsProps>(
    `${ADMISSION_PROFESSIONALS_ROUTE}?page=${params.page}&limit=${paginationConfig.pageSize}&sort_by=DESC`
  );
};

export const fetchAdmissionProfessional = async (id: string) => {
  return apiInstance.get<Professional>(`${ADMISSION_PROFESSIONALS_ROUTE}/${id}`);
};

interface fetchAdmissionProfessionalFamilyResponse {
  data: Family[];
  totalRecords: number;
}

export const fetchAdmissionProfessionalFamily = async (params: { id: string; page?: number }) => {
  const { id, page } = params;
  return apiInstance.get<fetchAdmissionProfessionalFamilyResponse>(
    `/admin/professionals/${id}/families?&page=${page}&limit=${paginationConfig.pageSize}`
  );
};

interface CreateAdmissionProfessionalParams {
  name: string;
  phone: string;
  email: string;
}

export const createAdmissionProfessional = async (
  admissionProfessional: CreateAdmissionProfessionalParams
) => {
  return apiInstance.post<Professional>(ADMISSION_PROFESSIONALS_ROUTE, admissionProfessional);
};

interface UpdateAdmissionProfessionalParams {
  admissionProfessionalId: string;
  updates: Partial<{ name?: string; phone?: string; email?: string }>;
}

export const updateAdmissionProfessional = async (params: UpdateAdmissionProfessionalParams) => {
  return apiInstance.put<Professional>(
    `${ADMISSION_PROFESSIONALS_ROUTE}/${params.admissionProfessionalId}`,
    params.updates
  );
};

export const deleteAdmissionProfessionals = async (id: string) => {
  return apiInstance.delete<BulkUpdateResponse>(`${ADMISSION_PROFESSIONALS_ROUTE}/${id}`);
};
