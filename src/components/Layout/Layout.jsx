import { Outlet, Link } from 'react-router-dom';
import { routes } from 'routes';
import { useSelector } from 'react-redux';
/*
export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectAuth = state => state.auth.user;
*/
import { selectLoggedIn, selectAuth } from 'redux/auth/selectors';
import Userbar from 'components/Userbar/Userbar';
import Authbar from 'components/Authbar/Authbar';

export const Layout = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isAuth = useSelector(selectAuth);
  return (
    <>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to={routes.CONTACTS}>Contact</Link>
          </li>
        )}
      </ul>
      {isLoggedIn ? <Userbar /> : <Authbar />}
      <Outlet />
    </>
  );
};
