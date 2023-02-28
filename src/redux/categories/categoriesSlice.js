// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoryArray: [],
  },
  reducers: {
    checkStatus: (state) => {
      if (state.categoryArray.length === 0) {
        state.categoryArray.push('Under construction');
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
