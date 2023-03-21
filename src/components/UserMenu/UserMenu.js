import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import { UserWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrap>
      <p>Welcome, {user.name}</p>

      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserWrap>
  );
};
