/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function Book(props) {
  Book.defaultProps = {
    title: '',
    author: '',
  };
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
  };
  const { title, author } = props;

  return (
    <div>
      <ul>
        <li>
          {title}
        </li>
        <li>
          {author}
        </li>
        <button type="submit">Remove</button>
      </ul>
    </div>
  );
}

export default Book;
