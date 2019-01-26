import { darken } from 'polished';
import React, { useContext, useState } from 'react';
import posed from 'react-pose';
import styled from 'styled-components/macro';
import { GarmentsContext } from '../../contexts/Garments';
import formatPrice from '../../utils/formatPrice';

const GarmentChoiceItem = ({ garment }) => {
  const [wiggle, setWiggle] = useState(false);

  const context = useContext(GarmentsContext);
  const removeGarmentHandler = garment => () => context.removeGarment(garment);

  console.log(context.garments);
  //   useEffect(
  //     () => {
  //       setWiggle(true);
  //       setTimeout(() => setWiggle(false), 100);
  //     },
  //     [garment.quantity],
  //   );

  const charPoses = {
    wiggle: { y: '10px' },
    init: { y: '0px' },
  };

  return (
    <Item onClick={removeGarmentHandler(garment)}>
      <Div1>{garment.description}</Div1>
      <Div2>
        {/* <SplitText charPoses={charPoses} pose={wiggle ? 'wiggle' : 'init'}> */}
        {garment.quantity.toString()}
        {/* </SplitText> */}
      </Div2>
      <Div3>
        <span>$</span>
        {formatPrice(garment.quantity * garment.price)}
      </Div3>
    </Item>
  );
};

export default GarmentChoiceItem;

const posedItem = posed.div({
  enter: { x: '0px', opacity: 1 },
  exit: { x: '40px', opacity: 0 },
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
