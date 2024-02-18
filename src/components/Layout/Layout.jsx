import { Outlet, Link } from 'react-router-dom';
import { routes } from 'routes';
import { useSelector } from 'react-redux';
import { appStyles } from '../App';
/*
export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectAuth = state => state.auth.user;
*/
import { selectLoggedIn, selectAuth } from 'redux/auth/selectors';
import Userbar from 'components/Userbar/Userbar';
import Authbar from 'components/Authbar/Authbar';
import { Flex } from '@chakra-ui/react';

export const Layout = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isAuth = useSelector(selectAuth);
  console.log(isAuth);
  return (
    <Flex height="20vh" justifyContent="center">
      <Flex direction="column">
        <ul
          style={{
            ...appStyles,
            border: '1px solid #2a2a2a',
            padding: '8px 12px',
            backgroundColor: '#3f51b5',
          }}
        >
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
      </Flex>
    </Flex>
  );
};
