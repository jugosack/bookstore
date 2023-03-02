/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      ...formInputs,
    };
    dispatch(addBook(newBook));
    setFormInputs({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (

    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={formInputs.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={formInputs.author}
          onChange={handleChange}
          required
        />
        <button type="submit">Add book</button>
      </form>

    </section>

  );
};

export default Form;
