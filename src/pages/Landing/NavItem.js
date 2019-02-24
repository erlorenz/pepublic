import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

function NavItem({ children, section }) {
  return (
    <li>
      <StyledLink
        to={section}
        spy={true}
        smooth={true}
        duration={300}
        offset={-70}>
        {children}
      </StyledLink>
    </li>
  );
}

export default NavItem;

const StyledLink = styled(Link)`
  line-height: 5rem;
  padding-right: 2rem;
  cursor: pointer;
`;
