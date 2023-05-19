import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';
axios.defaults.baseURL = 'https://6467bdb9e99f0ba0a816e0dd.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/contacts');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};
