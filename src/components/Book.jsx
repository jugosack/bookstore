import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <ul className="books">
        <li>
          <div className="book">
            <div className="book-content">
              <div className="book-info">
                <h4 className="book-category">Action</h4>
                <h2 className="book-title">{title}</h2>
                <h6 className="book-author">{author}</h6>
                <div className="action-buttons">
                  <button className="button-outline" type="button">Comments</button>
                  <div className="vertical-divider" />
                  <button className="button-outline" type="button" onClick={handleRemove}>Remove</button>
                  <div className="vertical-divider" />
                  <button className="button-outline" type="button">Edit</button>
                </div>
              </div>
              <div className="progress-container">
                <div className="circular-progress-container"><div className="circular-progress" /></div>
                <div className="progress-stat">
                  <p className="percent-complete">64%</p>
                  <p className="completed">Completed</p>
                </div>
                <div className="progress-divider" />
                <div className="current-chapter-container">
                  <div>
                    <p className="current-chapter-label">CURRENT CHAPTER</p>
                    <p className="current-chapter">Chapter 17</p>
                  </div>
                  <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
