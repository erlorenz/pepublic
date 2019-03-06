import React from 'react';
import styled from 'styled-components/macro';
import SectionTitle from './SectionTitle';
import { useSpring, animated } from 'react-spring';
import { fadeInAndUpWhenInView } from '../../styles/transitions';
import image from '../../assets/img/ourservices.png';
import useIntersecting from '../../hooks/useIntersecting';
import LazyImage from '../../components/LazyImage';

const description1 = `
Press Express will refresh your clothing and return your garments professionally finished, while eliminating 90% of odors, smoke, etc.
`;

const description2 = `
  In addition we can carry out minor repairs if requested, such as resewing buttons or resealing hems.
`;

const description3 = `
Finally, we do all this with the quickest turnaround in the city, making sure you have your garments back either same day or the following morning.
`;

const description4 = `
Pickup and delivery is always included in the price and we aim to make everything as simple as possible with our step-by-step online ordering.`;

const description5 = `
We do not dry clean garments, they are steam-pressed and hand-finished.`;

function OurServices() {
  // Animate on scroll
  const [ref, inView] = useIntersecting({
    threshold: 0.2,
    triggerOnce: true,
  });

  const spring1 = useSpring(fadeInAndUpWhenInView(inView, 0));
  const spring2 = useSpring(fadeInAndUpWhenInView(inView, 100));

  return (
    <Section id="ourservices">
      <SectionTitle>Our Services</SectionTitle>
      <Container>
        <Images ref={ref} style={spring1}>
          <LazyImage
            preDistance={400}
            src={image}
            alt="Suits, buttons, shirts"
          />
        </Images>
        <Description style={spring2}>
          <P>{description1}</P>
          <P>{description2}</P>
          <P>{description3}</P>
          <P>{description4}</P>
          <P>{description5}</P>
        </Description>
      </Container>
    </Section>
  );
}

export default OurServices;

const Section = styled.section`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;

  @media (min-width: 1025px) {
    padding: 2.5rem 10%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Images = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;
  min-height: 200px;
  @media (min-width: 1025px) {
    margin-right: 2rem;
  }
`;

const Description = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;
`;

const P = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;
