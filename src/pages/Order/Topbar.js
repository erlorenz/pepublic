import React from 'react';
import styled from 'styled-components/macro';

const Topbar = () => {
  return <Div>TOPBAR</Div>;
};

export default Topbar;

const Div = styled.div`
  height: 3rem;
  display: flex;
  background-color: white;
  border-bottom: lightgray solid 1px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  @media (min-width: 1000px) {
    height: 4rem;
  }
`;
