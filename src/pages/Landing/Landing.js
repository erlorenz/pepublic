import React from 'react';
import styled from 'styled-components/macro';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import OurServices from './OurServices';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { Helmet } from 'react-helmet';

const Landing = ({ history }) => {
  // Open and close side menu
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);
  const handleClick = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <>
      <Helmet>
        <title>Press Express Las Vegas</title>
      </Helmet>
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
  right: 0;
  overflow-x: hidden;
`;

// const Wrapper = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   overflow-x: hidden;
// `;
