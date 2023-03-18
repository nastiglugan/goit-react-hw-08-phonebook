import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  ContactItemWrap,
  ListItems,
  Item,
  DeleteBtn,
} from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItemWrap>
      <ListItems>
        <Item>Name:{contact.name}</Item>
        <Item>Tel:{contact.phone}</Item>
      </ListItems>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </ContactItemWrap>
  );
};
