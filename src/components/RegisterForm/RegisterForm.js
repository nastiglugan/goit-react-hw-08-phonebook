import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Register } from './RegisterForm.styled';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <Register onSubmit={handleSubmit} autoComplete="off">
        <TextField label="Name" variant="outlined" type="text" name="name" />

        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
        ></TextField>

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        ></TextField>

        <Button variant="contained" type="submit">
          Register
        </Button>
      </Register>
    </div>
  );
};
