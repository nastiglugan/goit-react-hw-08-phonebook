import { useDispatch, useSelector } from 'react-redux';
import { FormWrap } from './Form.styled';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import { TextField, Button, Box } from '@mui/material';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = {
      name: event.target.name.value,
      number: event.target.number.value,
      id: nanoid(),
    };

    const findContact = contacts.find(contact => contact.name === form.name);

    if (findContact) {
      alert(`${form.name} is already in contact`);
      return;
    }

    dispatch(addContact(form));

    const reset = () => {
      event.target.name.value = '';
      event.target.number.value = '';
    };
    reset();
  };

  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormWrap onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+380XXXXXXXXX"
        />

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </FormWrap>
    </Box>
  );
};

// };
