import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Parent, Student } from '@typings/model/family';

interface InitialState {
  selectedStudent: Student;
  selectedParent: Parent;
}

const initialState: InitialState = {
  selectedStudent: null,
  selectedParent: null,
};

const familySlice = createSlice({
  name: 'family',
  initialState,
  reducers: {
    setSelectedStudent: (state, action: PayloadAction<Student>) => {
      state.selectedStudent = action.payload;
    },
    setSelectedParent: (state, action: PayloadAction<Parent>) => {
      state.selectedParent = action.payload;
    },
  },
});

export const { setSelectedStudent, setSelectedParent } = familySlice.actions;

export default familySlice;
