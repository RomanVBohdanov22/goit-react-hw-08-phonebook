import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Flex } from '@chakra-ui/react'; //Center,
const Registration = () => {
  const [value, setValue] = useState({
    registerName: '',
    registerMail: '',
    registerPassword: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValue(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: value.registerName,
        email: value.registerMail,
        password: value.registerPassword,
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
      <Flex direction="column" background="#1c7f51" p={12} rounded={6}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="registerName">Name: </label>
          <input
            id="registerName"
            type="text"
            name="registerName"
            onChange={handleChange}
            value={value.registerName}
            required
          />
          <label htmlFor="registerMail"> Email: </label>
          <input
            id="registerMail"
            type="email"
            name="registerMail"
            onChange={handleChange}
            value={value.registerMail}
            required
          />
          <label htmlFor="registerPassword"> Password: </label>
          <input
            id="registerPassword"
            type="password"
            name="registerPassword"
            onChange={handleChange}
            value={value.registerPassword}
            required
          />{' '}
          <button
            type="submit"
            style={{ backgroundColor: '#7e1b8f', borderRadius: 6, padding: 4 }}
          >
            Sign Up
          </button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Registration;
