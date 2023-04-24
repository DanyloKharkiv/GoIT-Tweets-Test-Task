import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: {
    all: 'all',
    following: 'following',
    follow: 'follow',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
