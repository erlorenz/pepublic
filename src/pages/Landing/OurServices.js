import React from 'react';
import styled from 'styled-components/macro';
import SectionTitle from './SectionTitle';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin volutpat sem molestie lacinia. Nullam et tortor nisi. Suspendisse dictum convallis velit. Nulla facilisi. Fusce enim felis, accumsan vitae tellus eget, ultrices luctus augue. Duis porta purus sem. Sed mattis enim ante, sit amet imperdiet metus cursus nec. Nunc nec luctus eros, finibus placerat est. Vivamus turpis dui, ullamcorper ut enim at, sagittis interdum urna. Sed nec nisi sem.



`;

function OurServices() {
  return (
    <Section id="ourservices">
      <SectionTitle>Our Services</SectionTitle>
      <Container>
        <Images>Images Here</Images>
        <Description>
          <p> {description}</p>
          <p> {description}</p>
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
  background-color: #e7e8eb;

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

const Images = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;
`;

const Description = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 4rem;
`;
