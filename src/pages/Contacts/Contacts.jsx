import Contactlist from 'components/contactlist';
import Contactsform from 'components/contactsform';
import FilterContacts from 'components/filter/Filter';
import Title from 'components/title';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Title title={'Phonebook'} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>{isError}</p>}
        {contacts.length === 0 && <p>There are no any contacts ... </p>}
        <Contactsform />
        <Title title={'Contacts'} />
        <FilterContacts />
        <Contactlist />
      </div>
    </div>
  );
};

export default Contacts;
