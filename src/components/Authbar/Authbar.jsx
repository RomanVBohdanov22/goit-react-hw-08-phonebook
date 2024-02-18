import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const Authbar = () => {
  return (
    <Flex height="20vh" alignItems="center" justifyContent="center">
      <li>
        <Link to={routes.REGISTER}>Register</Link>
      </li>
      <li>
        <Link to={routes.LOGIN}>Login</Link>
      </li>
    </Flex>
  );
};

export default Authbar;
