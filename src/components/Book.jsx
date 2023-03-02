import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import RemoveButton from './removeButton';
import { removeBook } from '../redux/books/booksSlice';

function Book(props) {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  Book.defaultProps = {
    id: '',
    title: '',
    author: '',
  };
  Book.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  };

  return (
    <div>
      <ul>
        <li>
          {title}
        </li>
        <li>
          {author}
        </li>
        {/* <RemoveButton onClick={handleRemove} type="submit" /> */}
        <button onClick={handleRemove} type="submit">
          Remove
        </button>
      </ul>
    </div>

  );
}

export default Book;
