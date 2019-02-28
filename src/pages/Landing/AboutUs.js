import React from 'react';
import styled from 'styled-components/macro';
import SectionTitle from './SectionTitle';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { fadeInAndLeftWhenInView } from '../../styles/transitions';
import vegasSign from '../../assets/img/vegassign.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const description1 = `
Press Express was founded in 2018 as a new concept with the goal of providing a much needed service for business travelers, groups, as well as anyone looking for a quick and easy way to get their garments looking good in Las Vegas.`;

const description2 = `
  Although this business is young, the owners have over 30 years of experience in the industry and the know how to provide the best possible service.
  Our location only 1/2 a mile from The Strip and less than 1 mile from Downtown allows us to pickup and return garments faster than any other service in the city.
`;

function AboutUs() {
  //Fade in view
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  const spring1 = useSpring(fadeInAndLeftWhenInView(inView1));
  const spring2 = useSpring(fadeInAndLeftWhenInView(inView2));

  // Lazy load

  return (
    <Section id="aboutus">
      <SectionTitle>About Us</SectionTitle>
      <Container>
        <Description ref={ref1} style={spring1}>
          <P>{description1}</P>
          <P>{description2}</P>
        </Description>
        <Images ref={ref2} style={spring2}>
          <LazyLoadImage
            alt="Las Vegas sign"
            height="300px"
            src={vegasSign}
            threshold="500"
          />
        </Images>
      </Container>
    </Section>
  );
}

export default AboutUs;

const Section = styled.section`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media (min-width: 1000px) {
    padding: 2.5rem 10%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 3rem;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Images = styled(animated.div)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;
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
