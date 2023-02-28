// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({

  name: 'books',
  initialState: {
    bookArray: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.bookArray.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookArray.filter(
        (book) => book !== action.payload,
      );
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
