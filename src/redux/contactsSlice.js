import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
/*
import { createSlice } from "@reduxjs/toolkit";
// Імпортуємо операцію
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {})
      .addCase(fetchTasks.fulfilled, (state, action) => {})
      .addCase(fetchTasks.rejected, (state, action) => {});
  }
});

export const tasksReducer = tasksSlice.reducer;
*/
/*
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
*/
