import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const AuthNavigationLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  &.active {
    color: orange;
  }
`;
