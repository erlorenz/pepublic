import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components/macro';

function HowItWorksItem({ description, title, icon }) {
  return (
    <Div>
      <Icon>
        <StyledFontAwesomeIcon icon={icon} />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Div>
  );
}

export default HowItWorksItem;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  margin-bottom: 4rem;

  @media (min-width: 1000px) {
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
  font-size: 1.1rem;
  margin: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(4px 4px 2px #0000003d);
`;