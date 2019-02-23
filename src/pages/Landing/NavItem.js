import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

function NavItem({ children }) {
  return (
    <li>
      <StyledLink>{children}</StyledLink>
    </li>
  );
}

export default NavItem;

const StyledLink = styled(Link)`
  line-height: 5rem;
  padding-right: 2rem;
`;
