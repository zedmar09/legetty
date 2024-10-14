import API from '@core/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Professional } from '@typings/model/admissionProfessional';

interface InitialState {
  fetchingProfile: boolean;
  errorFetchingProfile: boolean;
  professional: Professional;
}

const initialState: InitialState = {
  fetchingProfile: false,
  errorFetchingProfile: false,
  professional: null,
};

export const fetchProfessionalProfile = createAsyncThunk(
  'fetchProfessionalProfile',
  async (_, { dispatch }) => {
    const professionalProfile = await API.ap.auth.fetchProfessionalProfile();
    return professionalProfile;
  }
);

const professionalSlice = createSlice({
  name: 'professional',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfessionalProfile.pending, (state, mainBlue) => {
        state.fetchingProfile = true;
        state.errorFetchingProfile = false;
      })
      .addCase(fetchProfessionalProfile.rejected, (state, mainBlue) => {
        state.errorFetchingProfile = true;
        state.fetchingProfile = false;
      })
      .addCase(fetchProfessionalProfile.fulfilled, (state, mainBlue) => {
        state.professional = mainBlue.payload;
        state.fetchingProfile = false;
      });
  },
});

export default professionalSlice;
