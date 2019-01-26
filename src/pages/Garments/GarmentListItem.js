import { darken } from 'polished';
import React, { useContext, useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components/macro';
import { GarmentsContext } from '../../contexts/Garments';

const GarmentListItem = ({ children, list, garment }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [slide, setSlide] = useState(false);
  const [disable, setDisable] = useState(false);

  const context = useContext(GarmentsContext);

  const onClickHandler = () => {
    setShowTooltip(true);
    setSlide(true);
    setDisable(true);
    setTimeout(() => {
      setShowTooltip(false);
      setSlide(false);
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
        <PoseGroup>
          {showTooltip && [
            <Quantity pose={slide ? 'slide' : 'init'} key="q">
              {showQuantity()}
            </Quantity>,
          ]}
        </PoseGroup>
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
  position: relative;
  cursor: pointer;
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

const PosedDiv = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 10,
    },
  },
  exit: { opacity: 0 },
  slide: {
    x: '25px',
    y: '-15px',
    transition: {
      duration: 600,
      ease: 'easeOut',
    },
  },
});

const Quantity = styled(PosedDiv)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  background: #788588;
  color: white;
  border-radius: 4px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

// const Group = styled(PoseGroup)`
//   display: none;
// `;
