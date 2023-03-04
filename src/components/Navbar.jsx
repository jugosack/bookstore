import {
  Outlet,
  Link, useMatch, useResolvedPath,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Bookstore CMS
        </Link>
        <ul id="ul-page">
          <CustomLink to="/" className="link-page">BOOKS</CustomLink>
          <CustomLink to="/categories" className="link-page">CATEGORIES</CustomLink>
        </ul>
        <div id="user_position">
          <div id="user"><FaUser /></div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
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
