import React from 'react';

import Book from '../components/Book';

import Form from '../components/Form';

const Books = () => (

  <section>
    <h1>List of books</h1>
    <Book title="FullStack React" author=" Anthony Accomazzo, Nate Murray, Ari Lerner" />
    <Form />
  </section>

);

export default Books;
