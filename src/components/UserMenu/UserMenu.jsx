import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className={css.userMenu}>
        <span>Welcome, {user.name} !</span>
      </div>
      <button onClick={handleLogout} className={css.logoutBtn}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
