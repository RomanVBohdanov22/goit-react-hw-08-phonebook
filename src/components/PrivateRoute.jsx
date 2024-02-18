/**
 
 import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
 
 */
/** //useAuth.js
 * //export * from "./useAuth"
 * 
 import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};
 */
