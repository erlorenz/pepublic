import React from 'react';
import styled from 'styled-components/macro';

const PageInstructions = ({ children }) => {
  return <H2>{children}</H2>;
};

export default PageInstructions;

const H2 = styled.h2`
  text-align: center;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (min-width: 1000px) {
    margin-bottom: 2rem;
  }
`;
