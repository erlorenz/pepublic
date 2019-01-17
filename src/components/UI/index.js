import styled from 'styled-components/macro';
import { darken } from 'polished';

/**
 * Export all basic UI elements
 */

export * from './table';

export const Card = styled.div`
  background-color: white;
  padding: 0.9rem;
  margin-bottom: 0.9rem;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

  @media (min-width: 1000px) {
    padding: 1.8rem;
    margin-bottom: 1.8rem;
  }
`;

export const CardHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h1`
  margin: 1.2rem 0;
  font-size: 1.15rem;
  font-weight: 700;
  align-self: flex-start;
`;

// Takes props: cancel
export const Button = styled.button`
  border: none;
  background-color: ${props =>
    props.cancel ? props.theme.buttonColorCancel : props.theme.buttonColor};
  color: white;
  font-size: 1rem;
  padding: 0.8rem 2.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};

  :hover {
    background-color: ${props =>
      props.cancel
        ? darken(0.05, props.theme.buttonColorCancel)
        : darken(0.07, props.theme.buttonColor)};
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Notification = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  margin-top: 0.8rem;
  padding: calc(0.8rem - 1px) 1rem;
  border-width: 1px;
  font-size: 0.9rem;
  border-style: solid;
  border-color: ${props => (props.warn ? 'yellow' : props.theme.errorColor)};
  background-color: ${props =>
    props.warn ? 'yellow' : props.theme.errorBackgroundColor};
  color: ${props => (props.warn ? 'yellow' : props.theme.errorColor)};

  @media (min-width) {
    font-size: 1rem;
  }
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;
