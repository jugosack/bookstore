import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const booksArr2 = useSelector((state) => state.books.bookArray);

  return (
    <section>
      <h1>List of books</h1>
      <ul>
        {booksArr2.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Form />
    </section>
  );
};

export default Books;
