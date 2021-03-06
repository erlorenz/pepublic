import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components/macro';
import {
  Control,
  Fieldset,
  Help,
  Icon,
  Label,
  RadioInput,
  RadioLabel,
} from './FieldGroupStyles';
import RadioButton from './RadioButton';

const DoubleRadioYesNo = ({
  children,
  label,
  name,
  formikProps,
  option1,
  option2,
  value1,
  value2,
  currentValue,
  ...props
}) => {
  const { errors, touched, handleChange, handleBlur } = formikProps;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';
  const icon =
    touched[name] && errors[name] ? <Icon icon={faExclamationCircle} /> : '';

  let checked1 = false;
  let checked2 = false;

  if ('yes' === currentValue) checked1 = true;
  if ('no' === currentValue) checked2 = true;

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>
        <FlexContainer>
          <RadioLabel checked={checked1} left>
            <RadioButton checked={checked1} />
            {option1}
            <RadioInput
              name={name}
              type="radio"
              value="yes"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={checked1}
            />
          </RadioLabel>

          <RadioLabel checked={checked2}>
            <RadioButton checked={checked2} />
            {option2}
            <RadioInput
              name={name}
              type="radio"
              checked={checked2}
              value="no"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </RadioLabel>
        </FlexContainer>
      </Control>
      <Help>
        {icon}
        {errorMessage}
      </Help>
    </Fieldset>
  );
};

export default DoubleRadioYesNo;

const FlexContainer = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
`;

// const Placeholder = styled(FlexContainer)`
//   padding: 0.5rem;
//   border-radius: ${props => props.borderRadius};
//   border: 1px solid ${borderColor};
//   background-color: white;
// `;
