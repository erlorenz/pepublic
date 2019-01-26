import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components/macro';

const DoubleRadio = () => {
  return (
    <Div>
      <LeftRadio />
      <RightRadio />
    </Div>
  );
};

export default DoubleRadio;

const borderSize = '1px';
const errorColor = '#ff3860';
const borderColor = '#dbdbdb';
const focusedBorderColor = '#389ac9';
const focusedBoxShadow = '0 0 0 0.125em rgba(50,115,220,.25)';
const errorBoxShadow = '0 0 0 0.125em rgba(255,56,96,.25)';

const Div = styled.div`
  display: flex;
`;

const RightRadio = styled.div`
  border: ${borderSize} solid
    ${props => (props.error ? errorColor : borderColor)};
  background-color: white;
  color: inherit;
  padding: calc(0.8rem - 1px) 1rem;
  font-size: 0.9rem;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  font-family: inherit;
  width: 100%;
  max-width: 100%;

  @media (min-width: 450px) {
    font-size: 1rem;
  }
  :hover {
    border: ${borderSize} solid ${darken(0.1, borderColor)};
  }

  :focus {
    border: ${borderSize} solid
      ${props => (props.error ? errorColor : focusedBorderColor)};
    outline: none;
    box-shadow: ${props => (props.error ? errorBoxShadow : focusedBoxShadow)};
  }
`;

const LeftRadio = styled(RightRadio)`
  margin-right: 1rem;
`;
