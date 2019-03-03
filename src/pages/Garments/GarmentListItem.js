import { darken } from 'polished';
import React, { useContext, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { GarmentsContext } from '../../contexts/Garments';

const GarmentListItem = ({ children, list, garment }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [disable, setDisable] = useState(false);

  const context = useContext(GarmentsContext);

  const onClickHandler = () => {
    setShowTooltip(true);
    setDisable(true);
    setTimeout(() => {
      setShowTooltip(false);
      setDisable(false);
    }, 300);
    context.addGarment(garment);
  };

  const showQuantity = () => {
    const index = context.garments.findIndex(g => g.id === garment.id);
    if (index !== -1) return context.garments[index].quantity;
    return null;
  };

  return (
    <>
      <Div type="button" onClick={onClickHandler} disabled={disable}>
        {showTooltip && <Quantity>{showQuantity()}</Quantity>}
        {children}
      </Div>
    </>
  );
};

export default GarmentListItem;

export const Div = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  cursor: pointer;
  position: relative;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.textColor};

  :hover {
    background-color: ${darken(0.05, '#FFF')};
  }

  :active {
    outline: none;
  }
  /* :focus {
    outline: none;
  } */
`;

const Quantity = animated(styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 2.5rem;
  font-size: 4rem;
  background: #788588;
  color: white;
  border-radius: 10px;
  opacity: 0.6;

  @media (min-width: 1025px) {
    display: none;
  }
`);

// const Group = styled(PoseGroup)`
//   display: none;
// `;
