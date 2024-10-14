import API from '@core/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Agent } from '@typings/model/agent';

interface InitialState {
  fetchingProfile: boolean;
  errorFetchingProfile: boolean;
  agent: Agent | null;
}

const initialState: InitialState = {
  fetchingProfile: false,
  errorFetchingProfile: false,
  agent: null,
};

export const fetchAgentProfile = createAsyncThunk('fetchAgentProfile', async (_, { dispatch }) => {
  const agentProfile = await API.fa.auth.fetchAgentProfile();
  return agentProfile;
});

const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAgentProfile.pending, (state, mainBlue) => {
        state.fetchingProfile = true;
        state.errorFetchingProfile = false;
      })
      .addCase(fetchAgentProfile.rejected, (state, mainBlue) => {
        state.errorFetchingProfile = true;
        state.fetchingProfile = false;
      })
      .addCase(fetchAgentProfile.fulfilled, (state, mainBlue) => {
        state.agent = mainBlue.payload;
        state.fetchingProfile = false;
      });
  },
});

export default agentSlice;
