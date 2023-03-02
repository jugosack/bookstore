/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G80IeE8IQkQaLBozJ0nT/books';

const initialState = {
  bookArray: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(URL);
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  },
);

export const bookSlice = createSlice({

  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      bookArray: [...state.bookArray, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      bookArray: state.bookArray.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.bookArray = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'failed';
      state.bookArray = [];
    },
  },
});

export const selectAllBooks = (state) => state.books.bookArray;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
