import React from 'react';
import styled from 'styled-components/macro';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const Landing = () => {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(true);

  const handleClick = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <>
      <SideMenu handleClick={handleClick} sideMenuIsOpen={sideMenuOpen} />
      <Main>
        <Navbar handleClick={handleClick} />
      </Main>
    </>
  );
};

export default Landing;

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
`;

// const Wrapper = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   overflow: hidden;
// `;
