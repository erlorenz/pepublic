import React, { useContext } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import formatPrice from '../../utils/formatPrice';
import { GarmentsContext } from '../../contexts/Garments';
import { GarmentHeader, GarmentItem } from './styles';

const GarmentList = ({ data }) => {
  const { getGarments } = data;
  const context = useContext(GarmentsContext);

  const addGarmentHandler = garment => () => context.addGarment(garment);

  const garmentItems = getGarments.map(garment => (
    <GarmentItem key={garment.id} onClick={addGarmentHandler(garment)}>
      <Div1>{garment.description}</Div1>{' '}
      <Div2>
        <span>$</span>
        {formatPrice(garment.price)}
      </Div2>
    </GarmentItem>
  ));

  return (
    <Container>
      <GarmentHeader>
        <Div1>Item</Div1>
        <Div2 header>Price</Div2>
      </GarmentHeader>
      {garmentItems}
    </Container>
  );
};

export default GarmentList;

const Container = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 95px -30px;

  @media (min-width: 1000px) {
    margin-right: 1.8rem;
  }
`;

const Div1 = styled.div``;

const Div2 = styled.div`
  text-align: right;
  width: 60px;
  display: ${props => (props.header ? 'block' : 'flex')};
  justify-content: space-between;
`;
