import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <Div>
      <Logo />
      <HamburgerButton>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerButton>
      <Nav>
        <NavItem>Schedule Now</NavItem>
        <NavItem>Our Services</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
      <MobileMenu>
        <CloseMenuButton>
          <FontAwesomeIcon icon={faTimes} />
        </CloseMenuButton>
        <MenuItem>Schedule Now</MenuItem>
        <MenuItem>Our Services</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MobileMenu>
    </Div>
  );
}

export default Navbar;

const Div = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    height: 5rem;
    flex-direction: row;
  }
`;

const HamburgerButton = styled.button`
  padding-left: 1rem;
`;

const CloseMenuButton = styled.button`
  padding-left: 1rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const MenuItem = styled.div``;

const NavItem = styled.div``;

const MobileMenu = styled.nav``;
