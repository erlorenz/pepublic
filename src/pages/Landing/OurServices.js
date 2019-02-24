import React from 'react';
import styled from 'styled-components/macro';
import SectionTitle from './SectionTitle';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { fadeInAndRightWhenInView } from '../../styles/transitions';

const description1 = `
Press Express will refresh your clothing and return your garments beautifully finished, while eliminating 90% of odors, smoke, etc.
`;

const description2 = `
  In addition we can carry out minor repairs if requested, such as resewing buttons or resealing hems.
`;

const description3 = `
Finally, we do all this with the quickest turnaround in the city, making sure you have your garments back either same day or the following morning.
`;

const description4 = `
Pickup and delivery is always included in the price and we aim to make everything as simple as possible for you.`;

const description5 = `
**We do not dryclean garments, they are steam pressed only.`;

function OurServices() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  const spring1 = useSpring(fadeInAndRightWhenInView(inView1));
  const spring2 = useSpring(fadeInAndRightWhenInView(inView2));

  return (
    <Section id="ourservices">
      <SectionTitle>Our Services</SectionTitle>
      <Container>
        <Images ref={ref1} style={spring1}>
          Images Here
        </Images>
        <Description ref={ref2} style={spring2}>
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

  @media (min-width: 1000px) {
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

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
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
