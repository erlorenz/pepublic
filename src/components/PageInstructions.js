import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { fadeInSlow } from '../styles/transitions';

const PageInstructions = ({ children }) => {
  const fadeIn = useSpring(fadeInSlow);

  return <H2 style={fadeIn}>{children}</H2>;
};

export default PageInstructions;

const H2 = animated(styled.h2`
  text-align: center;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (min-width: 1000px) {
    margin-bottom: 2rem;
  }
`);
