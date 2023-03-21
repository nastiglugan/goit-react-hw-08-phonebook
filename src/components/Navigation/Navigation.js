import { useAuth } from '../../hooks/useAuth';
import {
  NavigationLink,
  NavigationWrap,
} from '../Navigation/Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationWrap>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </NavigationWrap>
  );
};
