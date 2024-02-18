import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { Flex, Heading } from '@chakra-ui/react'; //Center,
import { logout } from 'redux/auth/operations';
/*Взагалі кажучи, це можна було б ще назвати UserMenu, але вже не дуже хочу чепати*/
const Userbar = () => {
  const user = useSelector(selectAuth);
  const dispatch = useDispatch();
  return (
    <Flex height="20vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="#1c7f51" p={12} rounded={6}>
        {user && <Heading mb={6}>{user.email}</Heading>}
        <br />
        <button
          type="button"
          style={{ backgroundColor: '#7e1b8f', borderRadius: 6 }}
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </Flex>
    </Flex>
  );
};
//"center" //style={{ backgroundColor: '#1c7f51' }}
export default Userbar;
