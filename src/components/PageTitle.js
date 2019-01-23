import React from 'react';
import styled from 'styled-components/macro';

const PageTitle = ({ children }) => {
  return <H1>{children}</H1>;
};

export default PageTitle;

const H1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  color: #3e404d;
  font-weight: 700;

  @media (min-width: 1000px) {
    font-size: 1.9rem;
  }
`;
