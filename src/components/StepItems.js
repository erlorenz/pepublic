import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StepItem = ({ icon, text, last, pathname, route }) => {
  let active = false;
  if (pathname === route) active = true;

  return (
    <Div>
      <Icon active={active}>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Text active={active}>{text}</Text>
      {!last && <Arrow>></Arrow>}
    </Div>
  );
};

export default StepItem;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  color: ${props => (props.active ? props.theme.buttonColor : null)};
  font-size: 1rem;

  @media (min-width: 1000px) {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
`;

const Arrow = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 500px) {
    margin-left: 1.3rem;
    margin-right: 1.3rem;
  }
`;

const Text = styled.span`
  display: none;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${props => (props.active ? props.theme.buttonColor : null)};

  @media (min-width: 1000px) {
    display: block;
  }
`;
