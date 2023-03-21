import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;

  color: white;
  font-size: 18px;
  font-weight: 500;
  &.active {
    color: #ffee58;
  }
`;

export const NavigationWrap = styled.nav`
  display: flex;
  gap: 15px;
`;
