import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Login } from '../LoginForm/LoginForm.styled';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <Login onSubmit={handleSubmit}>
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
          Log In
        </Button>
      </Login>
    </div>
  );
};
