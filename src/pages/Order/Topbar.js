import React from 'react';
import styled from 'styled-components/macro';

const Topbar = () => {
  return (
    <>
      <Div>TOPBAR</Div> <Spacer />
    </>
  );
};

export default Topbar;

const Div = styled.div`
  height: 4rem;
  display: flex;
  background-color: white;
  border-bottom: 1px solid rgb(236, 239, 245);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  @media (min-width: 1000px) {
    height: 5rem;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 4rem;

  @media (min-width: 1000px) {
    height: 5rem;
  }
`;
