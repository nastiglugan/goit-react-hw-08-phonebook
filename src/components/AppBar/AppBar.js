import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { AppBarWrap } from '../AppBar/AppBar.styled';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <AppBarWrap>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarWrap>
    </header>
  );
};
