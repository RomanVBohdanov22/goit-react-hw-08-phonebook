import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const Login = () => {
  const [value, setValue] = useState({
    LoginMail: '',
    LoginPassword: '',
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValue(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      login({
        email: value.LoginMail,
        password: value.LoginPassword,
      })
    );
  };
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <label htmlFor="LoginMail">Email</label>
        <input
          id="LoginMail"
          type="email"
          name="LoginMail"
          onChange={handleChange}
          value={value.LoginName}
          required
        />
        <label htmlFor="LoginPassword">Password</label>
        <input
          id="LoginPassword"
          type="password"
          name="LoginPassword"
          onChange={handleChange}
          value={value.LoginName}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
/*
<form onSubmit={handleSubmit}>
        <label htmlFor="registerName">Name</label>
        <input
          id="registerName"
          type="text"
          name="registerName"
          onChange={handleChange}
          value={value.registerName}
          required
        />
        <label htmlFor="registerMail">Email</label>
        <input
          id="registerMail"
          type="email"
          name="registerMail"
          onChange={handleChange}
          value={value.registerMail}
          required
        />
        <label htmlFor="registerPassword">Password</label>
        <input
          id="registerPassword"
          type="password"
          name="registerPassword"
          onChange={handleChange}
          value={value.registerPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
*/
