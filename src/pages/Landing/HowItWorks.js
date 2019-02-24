import { faClock, faTruck, faTshirt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components/macro';
import HowItWorksItem from './HowItWorksItem';
import SectionTitle from './SectionTitle';

const step1 = `Simply create your order by walking through our interactive web app. Schedule your pickup and return, select the items you'll be giving us, and finalize your order in a few easy steps.`;
const step2 = `Leave your garmenets at the pickup location before the chosen pickup time.`;
const step3 = `We do the rest! We will have it freshly pressed and returned by the selected return time at the same location. You will be updated via text each step of the way!`;

function HowItWorks() {
  return (
    <Section id="howitworks">
      <SectionTitle>How It Works</SectionTitle>
      <Container>
        <HowItWorksItem
          title="Schedule your order"
          description={step1}
          icon={faClock}
        />
        <HowItWorksItem
          title="Leave your garments"
          description={step2}
          icon={faTruck}
        />
        <HowItWorksItem
          title="Let us do the rest"
          description={step3}
          icon={faTshirt}
        />
      </Container>
    </Section>
  );
}

export default HowItWorks;

const Section = styled.section`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

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
