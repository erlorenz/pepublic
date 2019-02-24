import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components/macro';

function NavItem({ children, section }) {
  return (
    <Li>
      <StyledLink
        to={section}
        spy={true}
        smooth={true}
        duration={300}
        offset={-100}
        activeClass="active">
        {children}
      </StyledLink>
    </Li>
  );
}

export default NavItem;

const StyledLink = styled(Link)`
  padding-right: 3rem;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  display: block;
  line-height: 6rem;
  :hover {
    color: lightgray;
  }
`;

const Li = styled.li`
  .active {
    text-shadow: 0 0 15px #ffffffb3;
  }
`;
