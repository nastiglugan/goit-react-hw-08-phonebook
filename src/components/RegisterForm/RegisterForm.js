import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          E-mail
          <input type="email" name="email"></input>
        </label>
        <label>
          Password
          <input type="password" name="password"></input>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
