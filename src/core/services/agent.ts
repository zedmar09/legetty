import { paginationConfig } from '@core/config/app';
import { BulkUpdateResponse } from '@typings/common';
import { Agent } from '@typings/model/agent';
import { Family } from '@typings/model/family';
import apiInstance from '../lib/axios';

const AGENTS_ROUTE = '/admin/agents';

export const fetchAgents = async () => {
  return apiInstance.get<Agent[]>(AGENTS_ROUTE);
};

export const fetchAgent = async (id: string) => {
  return apiInstance.get<Agent>(`${AGENTS_ROUTE}/${id}`);
};

interface fetchAgentFamilies {
  data: Family[];
  totalRecords: number;
}

export const fetchAgentFamilies = async (params: { id: string; page: number }) => {
  const { id, page } = params;
  return apiInstance.get<fetchAgentFamilies>(
    `${AGENTS_ROUTE}/${id}/families?page=${page}&limit=${paginationConfig.pageSize}`
  );
};

interface CreateAgentParams {
  name: string | undefined;
  phone: string | undefined;
  email: string | undefined;
}

export const createAgent = async (agent: CreateAgentParams) => {
  return apiInstance.post<Agent>(AGENTS_ROUTE, agent);
};

interface UpdateAgentParams {
  agentId: string;
  updates: Partial<{ name?: string; phone?: string; email?: string }>;
}

export const updateAgent = async (params: UpdateAgentParams) => {
  return apiInstance.put<Agent>(`${AGENTS_ROUTE}/${params.agentId}`, params.updates);
};

export const deleteAgents = async (id: string) => {
  return apiInstance.delete<BulkUpdateResponse>(`${AGENTS_ROUTE}/${id}`);
};
