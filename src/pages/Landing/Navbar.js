import { darken } from 'polished';
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/img/menuicon.svg';
import NavItem from './NavItem';
import { fadeInSlow } from '../../styles/transitions';

function Navbar({ handleClick }) {
  const [transparent, setTransparent] = React.useState(true);

  // Check if scrolled past 60px and remove/add transparency
  const updateTransparent = () => {
    if (window.scrollY > 60) setTransparent(false);

    if (window.scrollY <= 60) setTransparent(true);
  };

  // Set event listener on mount and remove on unmount
  React.useEffect(() => {
    window.addEventListener('scroll', updateTransparent);
    return () => window.removeEventListener('scroll', updateTransparent);
  }, []);

  // Fading color change
  const fadeColor = useSpring({
    backgroundColor: transparent ? '#1d7a8c00' : '#1d7a8ce6',
  });

  //Fade In
  const fade = useSpring(fadeInSlow);

  const handleScrollToTop = () => animateScroll.scrollToTop({ duration: 300 });

  return (
    <Div style={fadeColor}>
      <MenuButton
        onClick={handleClick}
        style={fade}
        aria-label="open side menu">
        <MenuIcon />
      </MenuButton>
      <LogoContainer onClick={handleScrollToTop} style={fade}>
        <Logo />
      </LogoContainer>
      <Nav style={fade}>
        <Ul transparent={transparent}>
          <NavItem section="howitworks">How It Works</NavItem>
          <NavItem section="ourservices">Our Services</NavItem>
          <NavItem section="aboutus">About Us</NavItem>
          <NavItem section="contact">Contact</NavItem>
        </Ul>
      </Nav>
      <Schedule style={fade}>
        <StyledLink to="/order/schedule">SCHEDULE</StyledLink>
      </Schedule>
    </Div>
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
  background-color: white;
  z-index: 5;

  @media screen and (min-width: 1000px) {
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

  @media (min-width: 1000px) {
    display: none;
  }

  rect {
    fill: white;
  }
`;

const Nav = styled(animated.nav)`
  display: none;
  align-items: center;

  @media (min-width: 1000px) {
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

  @media (min-width: 1000px) {
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

  @media (min-width: 1000px) {
    line-height: inherit;
    background-color: ${props => props.theme.buttonColor};
    color: white;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;

    :hover {
      background-color: ${props => darken(0.1, props.theme.buttonColor)};
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;
