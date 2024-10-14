import API from '@core/services';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SavedSearch } from '@typings/common';
import { Family } from '@typings/model/family';
import { RootState } from '../store';
import { setSelectedParent, setSelectedStudent } from './familySlice';

export enum UserRole {
  FAMILY = 'family',
  ADMIN = 'admin',
  ADMISSION_PROFESSIONAL = 'admission_professional',
  FINANCIAL_AGENT = 'financial_agent',
}

export interface Step {
  id: string;
  title: string;
  completed?: boolean;
  requiredFields?: string[];
}

interface internalStepAction {
  payload: 'householdStep' | 'parentStep' | 'householdFinanceStep';
  type: string;
}

interface InitialState {
  role?: UserRole | null;
  onboarding: {
    currentStepIndex: number;
    completed: boolean;
    steps: Step[];
    householdStep: number;
    parentStep: number;
    householdFinanceStep: number;
    // studentStep: number;
  };
  authName: string | null;
  savedSearches: SavedSearch[];
  fetchingProfile: boolean;
  errorFetchingProfile: boolean;
  refetchingProfile: boolean;
  errorRefetchingProfile: boolean;
  family?: Family | null;
  awaitingFamiliesBanner: boolean;
  showGuideStep: boolean;
}

export const fetchFamilyProfile = createAsyncThunk('auth/fetchFamily', async (_, { dispatch }) => {
  const familyProfile = await API.family.auth.fetchProfile();
  dispatch(setSelectedStudent(familyProfile.students[0]));
  dispatch(setSelectedParent(familyProfile.parents[0]));

  return familyProfile;
});

export const refetchFamilyProfile = createAsyncThunk(
  'auth/refetchFamily',
  async (_, { dispatch, getState }) => {
    const familyProfile = await API.family.auth.fetchProfile();
    const currentState = getState() as RootState;
    if (currentState?.family.selectedStudent) {
      const currentStudent = currentState.family.selectedStudent;
      const newlyFetchedStudent = familyProfile.students.find(
        (student) => student.id === currentStudent.id
      );
      dispatch(setSelectedStudent(newlyFetchedStudent));
    } else {
      dispatch(setSelectedStudent(familyProfile.students[0]));
    }
    if (currentState?.family.selectedParent) {
      const currentParent = currentState.family.selectedParent;
      const newlyFetchedParent = familyProfile.parents.find(
        (student) => student.id === currentParent.id
      );
      dispatch(setSelectedParent(newlyFetchedParent));
    } else {
      dispatch(setSelectedParent(familyProfile.parents[0]));
    }

    return familyProfile;
  }
);

const onboardingSteps: Step[] = [
  {
    id: '1',
    title: 'Welcome',
    requiredFields: [],
  },
  {
    id: '2',
    title: 'Household',
    requiredFields: ['state', 'familyMembersCount'],
  },
  {
    id: '3',
    title: 'Parents',
    requiredFields: ['parents'],
  },
  {
    id: '4',
    title: 'Household Finance',
    requiredFields: [
      'primaryResidence',
      'residenceEquity',
      'ownsInvestmentProperty',
      'investmentEquity',
      // 'hasEquityInvestmentProperties',
      'investmentEquity',
      'isRealEstateLLCOrBusiness',
      'hasLifeInsuranceAccount',
      'insuranceAmount',
      'hasBusinessAssets',
      'bussinessAssetsAmount',
      'hasAnnuities',
      'annuitiesAmount',
    ],
  },
  {
    id: '5',
    title: 'Students',
    requiredFields: ['students'],
  },
];

const initialState: InitialState = {
  role: null,
  authName: null,
  onboarding: {
    steps: onboardingSteps,
    currentStepIndex: 0,
    completed: false,
    householdStep: 0,
    parentStep: 0,
    householdFinanceStep: 0,
    // studentStep: 0,
  },
  family: null,
  savedSearches: [],
  fetchingProfile: false,
  errorFetchingProfile: false,
  refetchingProfile: false,
  errorRefetchingProfile: false,
  awaitingFamiliesBanner: true,
  showGuideStep: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<UserRole>) {
      state.role = action.payload;
    },
    setAuthName(state, action: PayloadAction<string>) {
      state.authName = action.payload;
    },
    previousStep(state) {
      if (state.onboarding.currentStepIndex > 0) {
        state.onboarding.currentStepIndex = state.onboarding.currentStepIndex - 1;
      }
    },
    previousInternalStep(state, action: internalStepAction) {
      if (state.onboarding[action.payload] > 0) {
        state.onboarding[action.payload] = state.onboarding[action.payload] - 1;
      }
    },
    nextInternalStep(state, action: internalStepAction) {
      state.onboarding[action.payload] = state.onboarding[action.payload] + 1;
    },
    nextStep(state) {
      state.onboarding.steps = state.onboarding.steps.map((step, index) => {
        if (index === state.onboarding.currentStepIndex) {
          return {
            ...step,
            completed: true,
          };
        }
        return step;
      });
      var currentUrl = window.location.href;
      var url = new URL(currentUrl);
      const nextStep = state.onboarding.currentStepIndex + 1;
      url.searchParams.set('currentStepIndex', nextStep.toString());
      window.history.replaceState({}, '', url.toString());
      state.onboarding.currentStepIndex = nextStep;
    },
    setStep(state, action: PayloadAction<number>) {
      state.onboarding.currentStepIndex = action.payload;
    },
    logout(state) {
      state = initialState;
      return state;
    },
    setCompleted(state, action: PayloadAction<boolean>) {
      state.onboarding.completed = action.payload;
    },
    // TODO: fix any type
    addFavorite(state, action: PayloadAction<any>) {
      state.family = {
        ...state.family,
        favorites: [...state.family.favorites, action.payload],
      };
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.family = {
        ...state.family,
        favorites: [...state.family.favorites.filter((item) => item.college.id !== action.payload)],
      };
    },
    saveSearch(state, action: PayloadAction<SavedSearch>) {
      state.savedSearches = [...state.savedSearches, action.payload];
    },
    awaitingFamiliesBannerHide(state) {
      state.awaitingFamiliesBanner = false;
    },
    showGuideStepHide(state) {
      state.showGuideStep = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFamilyProfile.pending, (state, mainBlue) => {
        state.fetchingProfile = true;
        state.errorFetchingProfile = false;
      })
      .addCase(fetchFamilyProfile.rejected, (state, mainBlue) => {
        state.errorFetchingProfile = true;
        state.fetchingProfile = false;
      })
      .addCase(fetchFamilyProfile.fulfilled, (state, mainBlue) => {
        state.family = mainBlue.payload;
        state.fetchingProfile = false;
        state.role = UserRole.FAMILY;
      })
      .addCase(refetchFamilyProfile.pending, (state, mainBlue) => {
        state.refetchingProfile = true;
        state.errorRefetchingProfile = false;
      })
      .addCase(refetchFamilyProfile.rejected, (state, mainBlue) => {
        state.errorRefetchingProfile = true;
        state.refetchingProfile = false;
      })
      .addCase(refetchFamilyProfile.fulfilled, (state, mainBlue) => {
        state.family = mainBlue.payload;
        state.refetchingProfile = false;
        state.role = UserRole.FAMILY;
      });
  },
});

export const {
  setRole,
  nextStep,
  setStep,
  previousStep,
  logout,
  setCompleted,
  addFavorite,
  removeFavorite,
  saveSearch,
  awaitingFamiliesBannerHide,
  setAuthName,
  showGuideStepHide,
  previousInternalStep,
  nextInternalStep,
} = authSlice.actions;

export default authSlice;
