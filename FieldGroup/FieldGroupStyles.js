import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';

const borderSize = '1px';
const labelColor = '#363636';
const errorColor = '#ff3860';
const borderColor = '#dbdbdb';
const focusedBorderColor = '#389ac9';
const focusedBoxShadow = '0 0 0 0.125em rgba(50,115,220,.25)';
const errorBoxShadow = '0 0 0 0.125em rgba(255,56,96,.25)';

export const Fieldset = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const Label = styled.label`
  color: ${labelColor};
  margin-bottom: 0.3rem;
  font-weight: 600;
  display: block;
`;

export const Control = styled.div`
  position: relative;
  text-align: left;
`;

export const Help = styled.p`
  color: ${errorColor};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.3rem;
`;

export const Input = styled.input`
  display: block;
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

export const Select = styled(Input)``;

export const TextArea = styled(Input)``;
