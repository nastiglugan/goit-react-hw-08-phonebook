import { useDispatch, useSelector } from 'react-redux';
import { FilterWrap } from './Filter.styled';
import { filterContact } from '../../redux/contacts/filterSlice';
import { getFilter, getContacts } from '../../redux/contacts/selectors';
import { TextField, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const onChangeInput = e => dispatch(filterContact(e.target.value));

  return (
    <div>
      {contacts.length > 0 && (
        <Box
          component="div"
          sx={{
            '& .MuiTextField-root': { m: 0, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <FilterWrap>
            <TextField
              id="filled-size-small"
              label="Find contact"
              type="text"
              variant="standard"
              value={inputValue}
              onChange={onChangeInput}
            ></TextField>
          </FilterWrap>
        </Box>
      )}
    </div>
  );
};
