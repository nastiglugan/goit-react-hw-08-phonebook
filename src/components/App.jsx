import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { useAuth } from '../hooks/useAuth';
import { RestrictedRoute } from './RestrictedRout';
import { PrivateRoute } from './PrivateRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7986cb',
      },
      secondary: {
        main: '#efd401',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};
