import { useSelector } from 'react-redux';
import { ContactWrap, List, ContactTitle } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getFilter } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {getVisibleContacts.length > 0 && (
        <ContactWrap>
          <ContactTitle>Contact List</ContactTitle>
          <List>
            {getVisibleContacts.map(contact => {
              return (
                <li key={contact.id}>
                  <ContactItem contact={contact} />
                </li>
              );
            })}
          </List>
        </ContactWrap>
      )}
    </div>
  );
};
