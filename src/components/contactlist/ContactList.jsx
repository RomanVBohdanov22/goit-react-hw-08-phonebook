import '../contactlist/ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className="contactsList">
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Remove contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
