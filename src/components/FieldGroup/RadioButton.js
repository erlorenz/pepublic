import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CheckedRadio } from '../../assets/img/checkedradio.svg';
import { ReactComponent as UncheckedRadio } from '../../assets/img/uncheckedradio.svg';
import { useSpring, animated } from 'react-spring';

function RadioButton({ checked }) {
  // Explode the radio button

  const explodeOut = useSpring({
    opacity: checked ? 0 : 1,
    transform: checked ? 'scale(1.8, 1.8)' : 'scale(1, 1)',
    reset: checked ? false : true,
  });

  return (
    <>
      <BackgroundUncheckedRadio style={explodeOut} />
      {checked ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
    </>
  );
}

export default RadioButton;

const StyledCheckedRadio = styled(CheckedRadio)`
  position: absolute;
  left: 0.8rem;
  z-index: 1;
`;

const StyledUncheckedRadio = styled(UncheckedRadio)`
  position: absolute;
  left: 0.8rem;
  z-index: 0;
`;

const BackgroundUncheckedRadio = styled(animated.div)`
  position: absolute;
  left: 0.8rem;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  border: 3px solid #32c8e4;
  z-index: 0;
`;
