import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.links}>
      <NavLink to="/register" className={linkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={linkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
