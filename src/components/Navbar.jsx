/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
