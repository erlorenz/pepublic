import React from 'react';
import styled from 'styled-components/macro';

function SectionTitle({ children }) {
  return <Title>{children}</Title>;
}

export default SectionTitle;

const Title = styled.h2`
  text-align: center;
`;
