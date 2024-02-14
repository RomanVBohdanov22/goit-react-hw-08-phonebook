import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
const Userbar = () => {
  const user = useSelector(selectAuth);
  return (
    <div>
      {user && <p>{user.email}</p>}
      <button type="button">Logout</button>
    </div>
  );
};

export default Userbar;
