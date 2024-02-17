import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

import { logout } from 'redux/auth/operations';
const Userbar = () => {
  const user = useSelector(selectAuth);
  const dispatch = useDispatch();
  return (
    <div>
      {user && <p>{user.email}</p>}
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Userbar;
