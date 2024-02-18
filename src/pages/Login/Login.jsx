import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Flex } from '@chakra-ui/react';

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
    <Flex
      height="20vh"
      width="320px"
      alignItems="center"
      justifyContent="center"
    >
      {' '}
      <Flex direction="column" background="#1c7f51" p={12} rounded={6}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="LoginMail">Email: </label>
          <input
            id="LoginMail"
            type="email"
            name="LoginMail"
            onChange={handleChange}
            value={value.LoginName}
            required
          />{' '}
          <label htmlFor="LoginPassword">Password: </label>
          <input
            id="LoginPassword"
            type="password"
            name="LoginPassword"
            onChange={handleChange}
            value={value.LoginName}
            required
          />{' '}
          <button
            type="submit"
            style={{ backgroundColor: '#7e1b8f', borderRadius: 6, padding: 6 }}
          >
            Sign In
          </button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;
