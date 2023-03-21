import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  ContactItemWrap,
  ListItems,
  Item,
  ItemText,
} from './ContactItem.styled';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from '@mui/material';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItemWrap>
      <ListItems>
        <Item>
          <ItemText>Name: </ItemText>
          {contact.name}
        </Item>
        <Item>
          <ItemText>Number: </ItemText> {contact.number}
        </Item>
      </ListItems>
      <Button
        color="secondary"
        variant="text"
        type="button"
        onClick={handleDelete}
      >
        <HighlightOffIcon />
      </Button>
    </ContactItemWrap>
  );
};
