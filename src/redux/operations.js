import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//POST//https://goit-phonebook-api.herokuapp.com
// /users/
// /users/signup
// /users/login
// /users/logout
//GET// /users/current
//GET// /contacts
//POST// /contacts
//DELETE// /contacts/{contactId}
//PATCH// /contacts/{contactId}

/* /contacts */
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'cintacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
