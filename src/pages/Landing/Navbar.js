import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Navbar({ handleClick }) {
  return (
    <Div>
      <HamburgerButton onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerButton>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Nav>
        <NavItem schedule>
          <StyledLink to="/order/schedule">SCHEDULE</StyledLink>
        </NavItem>
        <NavItem>Our Services</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
    </Div>
  );
}

export default Navbar;

const Div = styled.div`
  height: 4rem;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;

  @media screen and (min-width: 1000px) {
    height: 5rem;
  }
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;

  :focus {
    outline: none;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  display: ${props => (props.schedule ? 'flex' : 'none')};
  font-size: 0.8rem;
  font-weight: 700;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  width: 120px;
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  line-height: 4rem;
`;
