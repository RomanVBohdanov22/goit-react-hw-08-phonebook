import { Outlet, Link } from 'react-router-dom';
import { routes } from '../routes';

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.REGISTER}>Register</Link>
        </li>
        <li>
          <Link to={routes.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={routes.CONTACTS}>Contacts</Link>
        </li>
      </ul>
    </>
  );
};
