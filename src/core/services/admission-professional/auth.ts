import apiInstance from '@core/lib/axios';
import { Professional } from '@typings/model/admissionProfessional';

const PROFESSIONAL_ROUTE = '/admission-professionals';

export const fetchProfessionalProfile = () => {
  return apiInstance.get<Professional>(`${PROFESSIONAL_ROUTE}/profile`);
};

export const updateProfessionalProfile = (data: Partial<Professional>) => {
  return apiInstance.put<Professional>(`${PROFESSIONAL_ROUTE}/profile`, data);
};
