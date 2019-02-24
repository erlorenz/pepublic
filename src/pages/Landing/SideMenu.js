import {
  faClock,
  faCogs,
  faEllipsisH,
  faPhone,
  faTimes,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import MenuItem from './MenuItem';

function SideMenu({ handleClick, sideMenuIsOpen }) {
  const props = useSpring({
    transform: sideMenuIsOpen ? 'translateX(0px)' : 'translateX(-270px)',
  });

  return (
    <MobileMenu style={props}>
      <CloseMenuButton onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseMenuButton>
      <Ul>
        <MenuItem handleClick={handleClick} schedule icon={faClock}>
          Schedule Now
        </MenuItem>
        <MenuItem handleClick={handleClick} icon={faCogs} to="howitworks">
          How It Works
        </MenuItem>
        <MenuItem handleClick={handleClick} icon={faTshirt} to="ourservices">
          Our Services
        </MenuItem>
        <MenuItem handleClick={handleClick} icon={faEllipsisH} to="aboutus">
          About Us
        </MenuItem>
        <MenuItem handleClick={handleClick} icon={faPhone} to="contact">
          Contact
        </MenuItem>
      </Ul>
    </MobileMenu>
  );
}

export default SideMenu;

const MobileMenu = styled(animated.nav)`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 270px;
  background-color: #222;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  padding: 1.3rem;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const CloseMenuButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: white;
  align-self: flex-end;

  :active {
    background-color: #ffffff40;
    border-radius: 50%;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
