import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const Authbar = () => {
  return (
    <>
      <li>
        <Link to={routes.REGISTER}>Register</Link>
      </li>
      <li>
        <Link to={routes.LOGIN}>Login</Link>
      </li>
    </>
  );
};

export default Authbar;
