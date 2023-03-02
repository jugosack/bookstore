import { createSlice } from '@reduxjs/toolkit';

export const booksArray1 = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];
export const bookSlice = createSlice({

  name: 'books',
  initialState: {
    bookArray: [...booksArray1],
  },
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
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
