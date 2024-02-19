import { Outlet, Link } from 'react-router-dom';
import { routes } from 'routes';
import { useSelector } from 'react-redux';
//import { appStyles } from '../App';
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
  const { name } = useSelector(selectAuth); //, email
  //console.log(isAuth);
  //console.log(name, email);
  return (
    <Flex
      height="20vh"
      width="800px"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        alignItems="center"
        background="#3f51b5"
        border="1px solid #2a2a2a"
        borderRadius="6"
        gap="12px"
      >
        <p style={{ background: '#b5843f' }}>{name}</p>
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
      </Flex>
    </Flex>
  );
};
