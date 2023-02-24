import React from 'react';

const Form = () => (

  <>
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input className="input title-input" placeholder="Book title" required="" value="" />
        <input className="input author-input" placeholder="Author" required="" value="" />
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>

    </section>

  </>

);

export default Form;
