import { AuthNavigation, AuthNavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthNavigationLink to="/register">Register</AuthNavigationLink>
      <AuthNavigationLink to="/login">Log In</AuthNavigationLink>
    </AuthNavigation>
  );
};
