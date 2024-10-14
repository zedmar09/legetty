import Button from '@components/Button/Button';
import AsyncSelect from '@components/Select/AsyncSeclect';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import API from '@core/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import { Family } from '@typings/model/family';
import React, { useState } from 'react';

interface AssignFinancialAgentProps {
  closeModal: (visible: false) => void;
  selectedFamily: Family;
  refetch?: () => void;
}

const AssignFinancialAgent: React.FC<AssignFinancialAgentProps> = (props) => {
  const { closeModal, selectedFamily, refetch } = props;
  const queryClient = useQueryClient();
  const [allData, setAllData] = useState([]);

  const [selectedAgent, setSelectedAgent] = useState<string | null>(
    selectedFamily?.agent?.id || null
  );

  const { isLoading: assignAgentLoading, mutate: assignAgent } = useMutation(
    API.admin.agent.assignAgent,
    {
      onSuccess(agent) {
        showToast(`Successfully! assign family to agent`);
        closeModal?.(false);
        refetch && refetch();
        queryClient.invalidateQueries([AdminsKeys.families]);
      },
      onError() {
        showToast('Unable to assign agent, please try again!');
      },
    }
  );

  const handleSelect = (agentId: string) => {
    setSelectedAgent(agentId);
  };

  const handleClose = () => {
    closeModal?.(false);
  };

  const handleAssign = () => {
    const data = {
      selectedAgent: selectedAgent,
      selectedFamily: selectedFamily.id,
    };
    assignAgent(data);
  };

  const userLoadOptions = async (searchQuery, _loadOptions, { page }, type) => {
    try {
      const res = await API.admin.agent.fetchAgents({ search: searchQuery, page: page });
      const { agents, totalRecords } = res;
      setAllData([...allData, ...agents]);
      return {
        options: agents.map((item) => ({
          label: item?.name,
          value: item?.id,
        })),
        hasMore: allData.length < totalRecords ? true : false,
        additional: {
          page: searchQuery ? 1 : page + 1,
        },
      };
    } catch (error) {
      return {
        options: [],
        hasMore: false,
      };
    }
  };

  return (
    <div className="rounded-lg overflow-hidden bg-black">
      <div className="bg-lightest4 p-6 sm:p-10 pb-6">
        <Typography variation="title2" className="font-bold">
          Assign financial agents to family
        </Typography>

        {/* <Select
          className="mt-10"
          options={options}
          isLoading={isLoading}
          value={selectedAgent}
          onChange={handleSelect}
          onInputChange={handleSearch}
          label="Select Financial Agent"
          inputClass="!border-gray-900"
          placeholder="You can also start typing their name"
        /> */}

        <AsyncSelect
          loadOptions={userLoadOptions}
          inputClass="!border-gray-900"
          placeholder="You can also start typing their name"
          label="Select Financial Agent"
          className="mt-4"
          onChange={handleSelect}
        />

        <Typography variation="description1" className="mt-6 font-bold text-mainBlue">
          Assign to yourself
        </Typography>
      </div>

      <div className="p-4 sm:py-8 sm:px-10 border-y bg-white">
        <div className="border border-lightest3 rounded-lg">
          <div className="flex justify-between p-4 border-b border-lightest3">
            <Typography className="text-dark">Parent 1</Typography>
            <Typography className="text-dark font-bold">
              {selectedFamily?.name
                ? selectedFamily.name
                : selectedFamily?.parents[0]?.firstName +
                    ' ' +
                    selectedFamily?.parents[0]?.lastName || 'N/A'}
            </Typography>
          </div>
          {selectedFamily?.parents[1] && (
            <div className="flex justify-between p-4">
              <Typography className="text-dark">Parent 2</Typography>
              <Typography className="text-dark font-bold">
                {selectedFamily?.parents[1]?.firstName + ' ' + selectedFamily?.parents[1]?.lastName}
              </Typography>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 sm:py-10 sm:px-10 sm:flex justify-between space-y-4 sm:space-y-0 sm:space-x-6 bg-white">
        <Button variation="secondary" onClick={handleClose} className="w-full">
          Cancel
        </Button>

        <Button
          onClick={handleAssign}
          className="w-full"
          loading={assignAgentLoading}
          disabled={selectedAgent ? false : true}>
          Assign
        </Button>
      </div>
    </div>
  );
};

export default AssignFinancialAgent;
