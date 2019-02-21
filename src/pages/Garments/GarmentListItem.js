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

  const driftAway = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 0.6, transform: 'scale(4.0)' },
    config: config.molasses,
  });

  return (
    <>
      <Div type="button" onClick={onClickHandler} disabled={disable}>
        {showTooltip && <Quantity style={driftAway}>{showQuantity()}</Quantity>}
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
  transform: translateX(-50%);
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  background: #788588;
  color: white;
  border-radius: 4px;
  opacity: 0.6;
  @media (min-width: 1000px) {
    display: none;
  }
`);

// const Group = styled(PoseGroup)`
//   display: none;
// `;
