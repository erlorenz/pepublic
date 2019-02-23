import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

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
        <Ul>
          <NavItem>Our Services</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact</NavItem>
        </Ul>
      </Nav>
      <Schedule schedule>
        <StyledLink to="/order/schedule">SCHEDULE</StyledLink>
      </Schedule>
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
    padding: 0 5%;
    justify-content: flex-end;
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
  display: none;
  align-items: center;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

const Schedule = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 120px;
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translate(-50%, -50%);

  @media (min-width: 1000px) {
    width: 200px;
    left: 5%;
    top: 2.5rem;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  line-height: 4rem;

  @media (min-width: 1000px) {
    line-height: inherit;
    background-color: lightblue;
    color: white;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;
