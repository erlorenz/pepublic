import React from 'react';
import styled from 'styled-components/macro';
import phoneSize from '../../assets/img/suitsphonesize.jpg';
import fullSize from '../../assets/img/suitsfullsize.jpeg';

function Hero({ history }) {
  const handleClick = () => history.push('schedule');

  return (
    <Section id="hero" phoneSize={phoneSize} fullSize={fullSize}>
      <Wrapper>
        {/* <BackgroundImage src={screen.width > 480 ? fullSize : phoneSize} /> */}
        <H1>Professionally pressed clothing, same or next day return.</H1>
        <Button onClick={handleClick}>Let's Get Started</Button>
      </Wrapper>
    </Section>
  );
}

export default Hero;

const Section = styled.section`
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 6rem;
  height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(#165f6dd9, #165f6dd9),
    url(${props => props.phoneSize});

  @media (min-width: 450px) {
    padding: 2rem;
    padding-top: 7rem;
    height: 90vh;
    background-image: linear-gradient(#165f6dd9, #165f6dd9),
      url(${props => props.fullSize});
  }
`;

const Overlay = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: white;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.buttonColor};
  font-size: 1rem;
  color: white;
  padding: 1.5rem 3rem;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;

  @media (min-width: 1000px) {
    /* padding: 1.5rem 3rem; */
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25%;
  max-width: 600px;

  @media (min-width: 1000px) {
    margin-bottom: 10%;
  }
`;
