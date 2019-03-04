import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/img/menuicon.svg';
import NavItem from './NavItem';
import { useInView } from 'react-intersection-observer';

function Navbar({ handleClick }) {
  // // Intersection observer with dummy div
  const [dummyDiv, inView] = useInView({ threshold: 0 });

  // Fading color change
  const fadeColor = useSpring({
    backgroundColor: inView
      ? 'rgba(29, 122, 140, 0.01)'
      : 'rgba(29, 122, 140, 0.91)',
    from: { backgroundColor: 'rgba(29, 122, 140, 0.01)' },
  });

  const handleScrollToTop = () => animateScroll.scrollToTop({ duration: 300 });

  return (
    <>
      <ObserverDummy ref={dummyDiv} />
      <Div style={fadeColor}>
        <MenuButton onClick={handleClick} aria-label="open side menu">
          <MenuIcon />
        </MenuButton>
        <LogoContainer onClick={handleScrollToTop}>
          <Logo />
        </LogoContainer>
        <Nav>
          <Ul>
            <NavItem section="howitworks">How It Works</NavItem>
            <NavItem section="ourservices">Our Services</NavItem>
            <NavItem section="aboutus">About Us</NavItem>
            <NavItem section="contact">Contact</NavItem>
          </Ul>
        </Nav>
        <Schedule>
          <StyledLink to="/order/schedule">SCHEDULE</StyledLink>
        </Schedule>
      </Div>
    </>
  );
}

export default Navbar;

const Div = styled(animated.div)`
  height: 4rem;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;

  @media screen and (min-width: 1025px) {
    height: 6rem;
    padding: 0 5%;
    justify-content: flex-end;
  }
`;

const MenuButton = styled(animated.button)`
  background-color: transparent;
  padding: 0;
  border: none;
  font-size: 1.2rem;

  :focus {
    outline: none;
  }

  @media (min-width: 1025px) {
    display: none;
  }

  rect {
    fill: white;
  }
`;

const Nav = styled(animated.nav)`
  display: none;
  align-items: center;

  @media (min-width: 1025px) {
    display: flex;
  }
`;

const Schedule = styled(animated.div)`
  display: flex;
  font-size: 0.7rem;
  font-weight: 700;
  align-items: center;
`;

const LogoContainer = styled(animated.div)`
  width: 120px;
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translate(-50%, -45%);
  cursor: pointer;

  @media (min-width: 1025px) {
    width: 200px;
    left: 5%;
    top: 3rem;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
  }

  path {
    fill: white;
  }
`;

const StyledLink = styled(Link)`
  line-height: 30px;
  border-radius: 4px;
  color: white;
  font-size: 0.6rem;
  font-weight: 500;

  @media (min-width: 350px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1025px) {
    border: 3px solid white;
    line-height: inherit;
    color: white;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: 500;

    :hover {
      background-color: #91c7d242;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const ObserverDummy = styled.div`
  height: 60px;
  width: 100vw;
  position: absolute;
  top: 0;
  background-color: transparent;
  z-index: 43525;
`;
