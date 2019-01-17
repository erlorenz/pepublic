import React from 'react';
import styled from 'styled-components/macro';
import Loader from 'react-loader-spinner';

const Loading = () => (
  <Div>
    <Loader type="Puff" color="#00BFFF" height="100" width="100" />
  </Div>
);

export default Loading;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
