import { Route, Routes } from 'react-router-dom';

import { routes } from '../routes';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Registration from 'pages/Registration/Registration';
import Login from 'pages/Login/Login';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

function getRandomHexColor() {
  return `#${Math.floor((0.2 + 0.5 * Math.random()) * 16777215).toString(16)}`;
}

export const appStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  gap: '12px',
  color: '#010101',
};
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.CONTACTS} element={<Contacts />} />
          <Route path={routes.REGISTER} element={<Registration />} />
          <Route path={routes.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

/*
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from './components'; // assuming you have these components

<Routes>
  <RestrictedRoute path={routes.REGISTER} element={<Registration />} />
  <RestrictedRoute path={routes.LOGIN} element={<Login />} />
  <Route path={routes.HOME} element={<Layout />}>
    <Route index element={<Home />} />
    <PrivateRoute path={routes.CONTACTS} element={<Contacts />} />
  </Route>
</Routes>

 */
