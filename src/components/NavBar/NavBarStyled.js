import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyled = styled.nav`
  display: flex;
  gap: 22px;
  padding: 22px;
  margin-bottom: 14px;
  box-shadow: 0 12px 4px 0px gray;
`;

const Link = styled(NavLink)`
  font-size: 26px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: crimson;
  }
  :hover:not(:active) {
    text-decoration: underline;
  }
`;

export { NavBarStyled, Link };