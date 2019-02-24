import React from 'react';
import styled from 'styled-components/macro';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import OurServices from './OurServices';
import AboutUs from './AboutUs';
import Contact from './Contact';
import 'intersection-observer';

const Landing = ({ history }) => {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  const handleClick = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <>
      <SideMenu handleClick={handleClick} sideMenuIsOpen={sideMenuOpen} />
      <Main>
        <Navbar handleClick={handleClick} />
        <Hero history={history} />
        <HowItWorks />
        <OurServices />
        <AboutUs />
        <Contact />
      </Main>
    </>
  );
};

export default Landing;

const Main = styled.main`
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
`;

const Section = styled.section`
  background-color: lightgray;
  border-bottom: 3px solid blue;
  height: 500px;
`;
