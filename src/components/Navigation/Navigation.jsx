import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={linkClass}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
