/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },

  reducers: {
    checkStatus: (state) => {
      state.categories = ['Under construction'];
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
