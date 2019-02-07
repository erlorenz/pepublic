import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import theme from '../styles/theme';

const StepItem = props => {
  const { icon, text, last, pathname, route, delay } = props;

  let active = false;
  if (pathname === route) active = true;

  const trailDown = useSpring({
    transform: 'translateY(0px',
    from: { transform: 'translateY(-20px' },
    delay: delay * 100,
  });

  const changeColor = useSpring({
    color: active ? theme.buttonColor : 'rgb(196, 196, 196)',
  });

  return (
    <Div style={trailDown}>
      <Icon style={changeColor}>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Text style={changeColor}>{text}</Text>
      {!last && <Arrow>></Arrow>}
    </Div>
  );
};

export default StepItem;

const Div = animated(styled.div`
  display: flex;
  align-items: center;
`);

const Icon = animated(styled.span`
  font-size: 1rem;

  @media (min-width: 1000px) {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
`);

const Arrow = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 500px) {
    margin-left: 1.3rem;
    margin-right: 1.3rem;
  }
`;

const Text = animated(styled.span`
  display: none;
  font-weight: 400;
  font-size: 0.9rem;

  @media (min-width: 1000px) {
    display: block;
  }
`);
