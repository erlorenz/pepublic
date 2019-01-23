import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

const NotFound = ({ history }) => {
  useEffect(() => {
    setTimeout(() => history.push('/'), 2000);
  }, []);

  return (
    <WholePage>
      <h1>NOT FOUND</h1>
    </WholePage>
  );
};

export default NotFound;

const WholePage = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 20vh;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 500;
`;
