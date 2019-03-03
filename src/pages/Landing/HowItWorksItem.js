import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components/macro';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { fadeInAndLeftWhenInView } from '../../styles/transitions';
// import { ReactComponent as HangerIcon } from '../../assets/img/hanger.svg';

function HowItWorksItem({ description, title, icon }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const spring = useSpring(fadeInAndLeftWhenInView(inView));

  return (
    <Div ref={ref} style={spring}>
      <Icon>
        <StyledFontAwesomeIcon icon={icon} />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Div>
  );
}

export default HowItWorksItem;

const Div = styled(animated.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  margin-bottom: 4rem;

  @media (min-width: 1025px) {
    max-width: 300px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.buttonColor};
  font-size: 4rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (min-width: 1025px) {
    font-size: 1.1rem;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(4px 4px 2px #0000003d);
`;

// const StyledHangerIcon = styled(HangerIcon)`
//   svg {
//     fill: blue;
//   }
// `;
