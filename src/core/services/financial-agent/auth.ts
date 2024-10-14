import apiInstance from '@core/lib/axios';
import { Agent } from '@typings/model/agent';

const agent_ROUTE = '/agents';

export const fetchAgentProfile = () => {
  return apiInstance.get<Agent>(`${agent_ROUTE}/profile`);
};

export const updateAgentProfile = (data: Partial<Agent>) => {
  return apiInstance.put<Agent>(`${agent_ROUTE}/profile`, data);
};
