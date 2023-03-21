import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}> */}
      <Button
        type="button"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
