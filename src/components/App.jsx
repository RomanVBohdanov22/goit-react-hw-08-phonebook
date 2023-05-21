import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading, selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactForm from './contactsform';
import ContactList from './contactlist';
import FilterContacts from './filter';
import Title from './title';

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
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
      <div>
        <Title title={'Phonebook'} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>{isError}</p>}
        {contacts.length === 0 && <p>There are no any contacts ... </p>}
        <ContactForm />
        <Title title={'Contacts'} />
        <FilterContacts />
        <ContactList />
      </div>
    </div>
  );
};
