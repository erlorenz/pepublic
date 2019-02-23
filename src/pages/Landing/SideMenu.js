import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faClock,
  faEllipsisH,
  faTshirt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
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
        <MenuItem schedule icon={faClock}>
          Schedule Now
        </MenuItem>
        <MenuItem icon={faTshirt}>Our Services</MenuItem>
        <MenuItem icon={faEllipsisH}>About Us</MenuItem>
        <MenuItem icon={faPhone}>Contact</MenuItem>
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
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
