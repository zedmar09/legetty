import API from '@core/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Family } from '@typings/model/family';

interface InitialState {
  fetchingAggregates: boolean;
  errorFetchingAggregates: boolean;
  agents: {
    total: number;
    percentage: number;
  };
  families: {
    today: number;
    percentage: number;
    total: number;
    directSignUp: number;
    byState: {
      family_state: string;
      familycount: string;
    }[];
  };
  admissionProfessionals: {
    total: number;
    percentage: number;
  };
  latestFamilies: Family[];
}

const initialState: InitialState = {
  fetchingAggregates: false,
  errorFetchingAggregates: false,
  agents: {
    total: 0,
    percentage: 0,
  },
  families: {
    total: 0,
    percentage: 0,
    today: 0,
    directSignUp: 0,
    byState: [],
  },
  admissionProfessionals: {
    total: 0,
    percentage: 0,
  },
  latestFamilies: [],
};

export const fetchAdminAggregates = createAsyncThunk(
  'admin/aggregates',
  async (_, { dispatch }) => {
    const adminAggregates = await API.admin.aggregates.fetchAdminAggregates();
    return adminAggregates;
  }
);

const adminSlice = createSlice({
  name: 'adminAggregates',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAdminAggregates.pending, (state) => {
        state.fetchingAggregates = true;
        state.errorFetchingAggregates = false;
      })
      .addCase(fetchAdminAggregates.rejected, (state) => {
        state.errorFetchingAggregates = true;
        state.fetchingAggregates = false;
      })
      .addCase(fetchAdminAggregates.fulfilled, (state, mainBlue) => {
        state.agents = mainBlue.payload.agents;
        state.families = mainBlue.payload.families;
        state.admissionProfessionals = mainBlue.payload.admissionProfessionals;
        state.latestFamilies = mainBlue.payload.latestFamilies;
        state.fetchingAggregates = false;
      });
  },
});

export default adminSlice;
