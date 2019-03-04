import { darken } from 'polished';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import fullSize from '../../assets/img/suitsfullsize.jpeg';
import phoneSize from '../../assets/img/suitsphonesize.jpeg';
import tabletSize from '../../assets/img/suitstabletsize.jpeg';

function Hero({ history, scrollRef }) {
  // Once image loaded fade in
  const [imageIsLoaded, setImageIsLoaded] = React.useState(false);

  const handleImageLoaded = () => {
    console.log('image is loaded');
    setImageIsLoaded(true);
  };

  const fadeInSlowly = useSpring({
    to: { opacity: imageIsLoaded ? 1 : 0 },
    from: { opacity: 0 },
    config: { duration: 4000 },
  });

  // Go to schedule page
  const handleClick = () => history.push('/order/schedule');

  return (
    <Section id="hero" ref={scrollRef}>
      <Wrapper>
        <H1>Professionally pressed clothing to look your best.</H1>
        <Button onClick={handleClick}>Let's Get Started</Button>
      </Wrapper>

      <ImageWrapper>
        <picture>
          <source media="(min-width: 1025px)" srcSet={fullSize} />
          <source media="(min-width: 500px)" srcSet={tabletSize} />
          <source srcSet={phoneSize} />
          <FillImage
            src={fullSize}
            alt="Suits nicely pressed."
            style={fadeInSlowly}
            onLoad={handleImageLoaded}
          />
        </picture>
      </ImageWrapper>
    </Section>
  );
}

export default Hero;

const Section = styled.section`
  background-color: #0e5361e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-top: 6rem;
  height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 450px) {
    height: 90vh;
  }

  @media (min-width: 1025px) {
    padding-top: 8rem;
  }
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  text-align: center;

  @media (min-width: 330px) {
    font-size: 2rem;
  }

  @media (min-width: 1025px) {
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
  font-size: 1.2rem;
  cursor: pointer;

  @media (min-width: 1025px) {
    /* padding: 1.5rem 3rem; */
    font-size: 1.3rem;
  }

  :hover {
    background-color: ${props => darken(0.1, props.theme.buttonColor)};
  }
`;

const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-30%);
  max-width: 600px;

  @media (min-width: 1025px) {
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #072731;
  z-index: -15;
  height: 100%;
  width: 100%;
`;

// const Image = styled(animated.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: -1;
//   background-size: cover;
//   opacity: 0;

//   background-image: url(${phoneSize});

//   @media (min-width: 500px) {
//     background-image: url(${tabletSize});
//   }

//   @media (min-width: 1025px) {
//     background-image: url(${fullSize});
//   }
// `;

const FillImage = styled(animated.img)`
  object-fit: fill;
  height: 100%;
  width: 100%;
  opacity: 0;
`;
