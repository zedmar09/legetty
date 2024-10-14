import apiInstance from '@core/lib/axios';
import { Family, Parent, Student } from '@typings/model/family';

const FAMILY_ROUTE = '/family';

export const fetchProfile = () => {
  return apiInstance.get<Family>(`${FAMILY_ROUTE}/profile`);
};

export const updateProfile = (data: Partial<Family>) => {
  return apiInstance.put<Family>(`${FAMILY_ROUTE}/profile`, data);
};

export const addParent = (data: Parent[]) => {
  return apiInstance.post<Parent[]>(`${FAMILY_ROUTE}/profile/parent`, data);
};

export const addStudent = (data: Student[]) => {
  return apiInstance.post<Student[]>(`${FAMILY_ROUTE}/profile/student`, data);
};

export const doneOnboarding = () => {
  return apiInstance.put(`${FAMILY_ROUTE}/profile/done-onboarding`);
};

export interface UpdateParentParams {
  parentId: string;
  data: Partial<Parent>;
}

export const updateParent = (params: UpdateParentParams) => {
  const { parentId, data } = params;
  return apiInstance.put<Family>(`${FAMILY_ROUTE}/profile/parent/${parentId}`, data);
};

interface UpdateStudentParams {
  studentId: string;
  data: Partial<Parent>;
}

export const updateStudent = (params: UpdateStudentParams) => {
  const { studentId, data } = params;
  return apiInstance.put<Family>(`${FAMILY_ROUTE}/profile/student/${studentId}`, data);
};

interface FamilySignUpParams {
  name: string;
  email: string;
  password: string;
  familyInviteId?: string;
}
export const familySignup = (params: FamilySignUpParams) => {
  return apiInstance.post<Family>(`/family/signup`, params);
};
