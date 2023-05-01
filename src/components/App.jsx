import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import ContactForm from './contactsform';
import ContactList from './contactlist';
import { nanoid } from 'nanoid';
import FilterContacts from './filter';
import Title from './title';
import { getData, saveData } from './api'; //saveDataForm

function getRandomHexColor() {
  return `#${Math.floor((0.2 + 0.5 * Math.random()) * 16777215).toString(16)}`;
}

const appStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  gap: '12px',
  color: '#010101',
};
export const App = () => {
  const [contacts, setContatcs] = useState(getData);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    saveData(contacts);
  }, [contacts]);

  // methods
  const onFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      Notiflix.Notify.failure('This contact is already exists');
      return;
    }
    setContatcs(prevState => [...prevState, contact]);
    Notiflix.Notify.success(`Succesfully added ${name} to your contacts`);
  };

  const onSearchContact = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = (id, name) => {
    setContatcs(prevState => prevState.filter(contact => contact.id !== id));
    Notiflix.Notify.info(`Succesfully removed ${name} from your contacts`);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
      <div>
        <Title title={'Phonebook'} />
        <ContactForm onFormSubmit={onFormSubmit} />
        <Title title={'Contacts'} />
        <FilterContacts filter={filter} onSearchContact={onSearchContact} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};
