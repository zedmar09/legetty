import { paginationConfig } from '@core/config/app';
import apiInstance from '@core/lib/axios';
import { College } from '@typings/model/college';

const COLLEGE_ROUTE = '/family/colleges';

interface FetchCollegesParams {
  pageParam?: number;
  state?: string;
  admission?: string;
  search?: string;
  page?: number;
  major_code?: string;
  acceptance_rate_min?: string;
  acceptance_rate_max?: string;
  college_level?: string;
  college_size_min?: string;
  college_size_max?: string;
  college_type?: string;
  gpa?: string;
  act?: string;
  sat?: string;
  sortBy?: string;
}

interface FetchCollege {
  data: College[];
  totalRecords: number;
}

// TODO: use new url search params
export const fetchColleges = (params) => {
  let query = '?';

  if (params.state) {
    query += `state=${params.state}&`;
  }
  // if (params.act) {
  //   query += `act=${params.act}&`;
  // }
  // if (params.gpa) {
  //   query += `gpa=${params.gpa}&`;
  // }
  // if (params.sat) {
  //   query += `sat=${params.sat}&`;
  // }
  if (params.college_level) {
    query += `college_level=${params.college_level}&`;
  }
  if (params.college_type) {
    query += `college_type=${params.college_type}&`;
  }
  if (params.major_code) {
    query += `major_code=${params.major_code}&`;
  }
  if (params.acceptance_rate_max) {
    query += `acceptance_rate_max=${params.acceptance_rate_max}&acceptance_rate_min=${params.acceptance_rate_min}&`;
  }
  if (params.college_size_min) {
    query += `college_size_min=${params.college_size_min}&college_size_max=${params.college_size_max}&`;
  }
  if (params.search) {
    query += `search=${params.search}&`;
  }
  if (params.pageParam) {
    query += `page=${params.pageParam}&limit=${paginationConfig.pageSize}`;
  }
  // if (params.sortBy) {
  //   const sortBy = params.sortBy.split(' (')[0];
  //   const sort_order = params.sortBy.split(' (')[1] === 'Low to High)' ? 'INC' : 'DESC';
  //   query += `sort_by=${sortBy}&sort_order=${sort_order}&`;
  // }

  return apiInstance.get<FetchCollege>(`${COLLEGE_ROUTE}${query}`);
};

export const fetchCollege = (id: any) => {
  return apiInstance.get<College>(`${COLLEGE_ROUTE}/${id}`);
};

interface AddFavoriteCollegeParams {
  collegeId: string;
  studentId: string;
}

export const addFavorite = (params: AddFavoriteCollegeParams) => {
  const { collegeId, studentId } = params;
  return apiInstance.post<any>(`/family/favourite`, { collegeId, studentId });
};

export const removeFavorite = (collegeId: string) => {
  return apiInstance.delete<any>(`/family/favourite/${collegeId}`);
};

export const talkTOExport = () => {
  return apiInstance.put(`/family/profile/request-help`);
};
