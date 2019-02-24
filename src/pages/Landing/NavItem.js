import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components/macro';

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
  padding-right: 3rem;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  display: block;
  line-height: 4rem;

  :hover {
    color: lightgray;
  }
`;
