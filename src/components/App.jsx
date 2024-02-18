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

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useAuth } from 'hooks';

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
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
          <Routes>
            <Route path={routes.HOME} element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path={routes.REGISTER}
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Registration />}
                  />
                }
              />
              <Route
                path={routes.LOGIN}
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />
              <Route
                path={routes.CONTACTS}
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};
