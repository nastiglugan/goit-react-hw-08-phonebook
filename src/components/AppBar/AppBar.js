import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { AppBarWrap } from '../AppBar/AppBar.styled';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Toolbar, Box } from '@mui/material';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarWrap>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Navigation />
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </AppBarWrap>
  );
};
