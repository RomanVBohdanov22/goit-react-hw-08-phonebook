import '../contactsform/ContactsForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
//import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValue(prevState => ({ ...prevState, [name]: value }));
  };

  const clearFormFields = e => {
    e.preventDefault();

    const isExist = contacts.some(
      contact =>
        contact.name.toLowerCase() === value.name.toLowerCase() ||
        contact.number === value.number
    );
    if (isExist) {
      Notiflix.Notify.failure('This contact is already exists');
      return;
    }
    dispatch(addContact({ ...value })); //, id: nanoid()
    setValue({ name: '', number: '' });
  };
  //

  return (
    <form onSubmit={clearFormFields} className="contactForm">
      <label htmlFor="name">Name</label>
      <input
        className="ContactInput"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={value.name}
        required
      />
      <label htmlFor="number">Number</label>
      <input
        className="ContactInput"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={value.number}
        required
      />
      <button type="submit" className="ContactBtn">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
