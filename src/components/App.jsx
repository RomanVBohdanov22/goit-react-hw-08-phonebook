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
  return (
    <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
      <div>
        <Title title={'Phonebook'} />
        <ContactForm />
        <Title title={'Contacts'} />
        <FilterContacts />
        <ContactList />
      </div>
    </div>
  );
};
