/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G80IeE8IQkQaLBozJ0nT/books';

const initialState = {
  books: [],
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const headers = {
  headers: {
    'content-type': 'application/json',
  },
};

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);
const addBook = createAsyncThunk('books/addBooks', async (book) => {
  const data = JSON.stringify(book);
  try {
    const response = await axios.post(URL, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const data = JSON.stringify({ item_id: id });
  try {
    const response = await axios.delete(URL + id, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ifSucceed = true;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.isLoading = false;
    },

    [addBook.pending]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
    [addBook.rejected]: (state) => {
      state.isLoading = false;
    },

    [removeBook.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
    [removeBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export { fetchBooks, addBook, removeBook };
export default bookSlice.reducer;
