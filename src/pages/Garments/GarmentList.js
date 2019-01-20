import React from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import { darken } from 'polished';
import formatPrice from '../../utils/formatPrice';

const GarmentList = ({ data }) => {
  const { getGarments } = data;

  const garmentItems = getGarments.map(garment => (
    <Li key={garment.id}>
      <div>{garment.description}</div> <div>{formatPrice(garment.price)}</div>
    </Li>
  ));

  return <Container>{garmentItems}</Container>;
};

export default GarmentList;

const Li = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  cursor: pointer;

  :first-child {
    padding-top: 0;
  }
  :last-child {
    padding-bottom: 0;
  }

  :hover {
    background-color: ${darken(0.05, '#FFF')};
  }
`;

const Container = styled(Card)`
  @media (min-width: 1000px) {
    width: 40%;
    margin-right: 1.8rem;
  }
`;
