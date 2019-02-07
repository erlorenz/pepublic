import { darken } from 'polished';
import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { Card } from '../../components/UI';
import { GarmentsContext } from '../../contexts/Garments';
import { scaleUpAndFadeIn } from '../../styles/transitions';
import formatPrice from '../../utils/formatPrice';
import { GarmentHeader } from './styles';

const GarmentChoice = () => {
  const context = useContext(GarmentsContext);
  const [belowMinPrice, setBelowMinPrice] = React.useState(false);

  React.useEffect(() => {
    if (context.totalPrice() < 3000) setBelowMinPrice(true);
    if (context.totalPrice() >= 3000) setBelowMinPrice(false);
  }, [context.totalPrice()]);

  const removeGarmentHandler = garment => () => context.removeGarment(garment);

  const items = context.garments;
  // const transitions = useTransition(items, item => item.slug, listFadeAndSlide);

  const garmentList = items.map(item => {
    return (
      <Item key={item.slug} onClick={removeGarmentHandler(item)}>
        <Div1>{item.description}</Div1>
        <Div2>{item.quantity} </Div2>
        <Div3>
          <span>$</span>
          {formatPrice(item.quantity * item.price)}
        </Div3>
      </Item>
    );
  });

  const scaleUp = useSpring(scaleUpAndFadeIn);

  if (context.garments.length)
    return (
      <Container style={scaleUp}>
        <Selected>
          <GarmentHeader>
            <Div1>Item</Div1>
            <Div2>Quantity</Div2>
            <Div3 header>Subtotal</Div3>
          </GarmentHeader>
          {garmentList}
        </Selected>
        <TotalPrice strike={belowMinPrice}>
          <Span>TOTAL PRICE:</Span>
          <Price strike={belowMinPrice}>
            <span>$</span>
            {formatPrice(context.totalPrice())}
          </Price>
        </TotalPrice>
        {belowMinPrice && (
          <MinPrice>
            <Span>MIN PRICE:</Span>
            <Price>
              <span>$</span> 30.00
            </Price>
          </MinPrice>
        )}
      </Container>
    );

  if (!context.garments.length)
    return (
      <Container style={scaleUp}>
        <Centered>There are no items selected.</Centered>
      </Container>
    );
};

export default GarmentChoice;

const Container = animated(styled(Card)`
  width: 100%;
  font-size: ${props => props.theme.listFontSize};
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 95px -30px;
  overflow-x: visible;
`);

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
  text-decoration: ${props => (props.strike ? 'line-through' : 'none')};
  color: ${props => (props.strike ? '#bcbcbc' : null)};
`;

const MinPrice = styled(TotalPrice)`
  border-top: none;
`;

const Div1 = styled.div`
  width: 60%;
`;

const Div2 = styled.div`
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
  color: inherit;
`;

const Price = styled.span`
  display: flex;
  width: 60px;
  justify-content: space-between;
`;

const Item = animated(styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  position: relative;
  cursor: pointer;

  :hover {
    background-color: ${darken(0.05, '#FFF')};
  }
`);
