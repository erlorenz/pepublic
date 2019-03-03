import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { fadeInSlow } from '../styles/transitions';

const PageTitle = ({ children, className }) => {
  const fadeIn = useSpring(fadeInSlow);

  return (
    <H1 className={className} style={fadeIn}>
      {children}
    </H1>
  );
};

export default PageTitle;

const H1 = animated(styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  color: #3e404d;
  font-weight: 700;

  @media (min-width: 1025px) {
    font-size: 1.9rem;
  }
`);
