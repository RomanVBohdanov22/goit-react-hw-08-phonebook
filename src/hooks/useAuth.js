import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectIsRefreshing,
  selectAuth,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectAuth);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

/*
export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectAuth = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

*/
