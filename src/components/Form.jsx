import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      category: 'Fiction',
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

    <section className="form_section">
      <h3 className="form-title">ADD NEW BOOK</h3>
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
          placeholder="author"
          name="author"
          value={formInputs.author}
          onChange={handleChange}
          required
        />
        <button type="submit" id="addbook">Add book</button>
      </form>

    </section>

  );
};

export default Form;
