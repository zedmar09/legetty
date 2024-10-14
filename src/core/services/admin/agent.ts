import { paginationConfig } from '@core/config/app';
import apiInstance from '@core/lib/axios';
import { Agent } from '@typings/model/agent';

interface FetchAgentsParams {
  search?: string;
  page?: number;
  limit?: number;
}

interface AssignAgentsParams {
  selectedFamily: string;
  selectedAgent: string;
}

interface FetchAgentsProps {
  agents: Agent[];
  totalRecords: number;
}

export const fetchAgents = async (params: FetchAgentsParams = {}) => {
  const { page, search } = params;
  const url = new URLSearchParams({
    search: search || '',
    page: page?.toString() || paginationConfig.defaultPage.toString(),
    limit: paginationConfig.pageSize.toString(),
    sort_by: 'DESC',
  });

  return apiInstance.get<FetchAgentsProps>(`/admin/agents?${url.toString()}`);
};

export const assignAgent = async (params) => {
  return apiInstance.post(`/admin/families/${params.selectedFamily}/assign-financial-agent`, {
    agentId: params.selectedAgent,
  });
};

export const removeAgent = async (params: { id: string }) => {
  const { id } = params;
  return apiInstance.post(`/admin/families/${id}/remove-financial-agent`);
};
