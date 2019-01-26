import { darken } from 'polished';
import React, { useContext } from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components/macro';
import { Card } from '../../components/UI';
import { GarmentsContext } from '../../contexts/Garments';
import formatPrice from '../../utils/formatPrice';
import { GarmentHeader } from './styles';

const GarmentChoice = () => {
  const context = useContext(GarmentsContext);

  const removeGarmentHandler = garment => () => context.removeGarment(garment);

  const garmentList = context.garments.map(garment => {
    return (
      <Item key={garment.id} onClick={removeGarmentHandler(garment)}>
        <Div1>{garment.description}</Div1>
        <Div2>{garment.quantity} </Div2>
        <Div3>
          <span>$</span>
          {formatPrice(garment.quantity * garment.price)}
        </Div3>
      </Item>
    );
  });

  if (context.garments.length) {
    return (
      <Container>
        <Selected>
          <GarmentHeader>
            <Div1>Item</Div1>
            <Div2>Quantity</Div2>
            <Div3 header>Subtotal</Div3>
          </GarmentHeader>
          <PoseGroup>{garmentList}</PoseGroup>
        </Selected>
        <TotalPrice>
          <Span>TOTAL PRICE:</Span>
          <Price>
            <span>$</span>
            {formatPrice(context.totalPrice())}
          </Price>
        </TotalPrice>
      </Container>
    );
  } else {
    return (
      <Container>
        <Centered>There are no items selected.</Centered>
      </Container>
    );
  }
};

export default GarmentChoice;

const Container = styled(Card)`
  width: 100%;
  font-size: ${props => props.theme.listFontSize};
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 95px -30px;
`;

const Selected = styled.div`
  width: 100%;
`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  margin-top: 0.5rem;
  padding-top: 0.2rem;
  border-top: solid 1px lightgray;
`;

const Div1 = styled.div`
  width: 60%;
`;

const posedDiv2 = posed.div({
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '20px' },
});

const Div2 = styled(posedDiv2)`
  width: 70px;
`;

const Div3 = styled.div`
  text-align: right;
  width: 60px;
  display: ${props => (props.header ? 'block' : 'flex')};
  justify-content: space-between;
`;

const Centered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  margin-right: 1.5rem;
`;

const Price = styled.span`
  display: flex;
  width: 60px;
  justify-content: space-between;
`;

const posedItem = posed.div({
  enter: { x: '0px', opacity: 1 },
  exit: { x: '40px', opacity: 0 },
  wiggle: { x: '10px' },
  init: { x: '0px' },
});

const Item = styled(posedItem)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  position: relative;
  cursor: pointer;

  :hover {
    background-color: ${darken(0.05, '#FFF')};
  }
`;
