import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Bookstore CMS
      </Link>
      <ul>
        <CustomLink to="/">BOOKS</CustomLink>
        <CustomLink to="/categories">CATEGORIES</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  CustomLink.propTypes = {
    to: '',
    children: '',
  };
  CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
