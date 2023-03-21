import { Form } from '../components/Form/Form';

import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {' '}
      <div>{isLoading && 'Request in progress...'}</div>
      <Form />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
