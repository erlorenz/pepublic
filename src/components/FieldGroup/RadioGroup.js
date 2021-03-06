import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';

import {
  borderColor,
  Fieldset,
  Help,
  Icon,
  Label,
  RadioInput,
  RadioLabel,
} from './FieldGroupStyles';
import RadioButton from './RadioButton';

const RadioGroup = ({
  children,
  label,
  name,
  times,
  formikProps,
  values,
  ...props
}) => {
  const { errors, touched, handleChange, handleBlur } = formikProps;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';
  const icon =
    touched[name] && errors[name] ? <Icon icon={faExclamationCircle} /> : '';

  const selectedHour = values[name] ? values[name] : 0;

  const slideHeight = useSpring({
    from: { height: 0 },
    to: { height: 'auto' },
  });

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <FlexContainer style={slideHeight}>
        {times.map(time => (
          <RadioGroupLabel
            key={time.hour}
            checked={time.valueOf().toString() === selectedHour}
            left>
            <RadioButton checked={time.valueOf().toString() === selectedHour} />
            {time.toFormat('h:mm a')}
            <RadioInput
              name={name}
              type="radio"
              value={time.valueOf().toString()}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </RadioGroupLabel>
        ))}
      </FlexContainer>
      <Help>
        {icon}
        {errorMessage}
      </Help>
    </Fieldset>
  );
};

export default RadioGroup;

const FlexContainer = animated(styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: ${props => props.borderRadius};
  border: 1px solid ${borderColor};
  background-color: white;
`);

const RadioGroupLabel = styled(RadioLabel)`
  z-index: ${props => (props.checked ? 1 : 0)};
  border: ${props =>
    props.checked ? '1px solid ' + props.theme.buttonColor : 'none'};
  box-shadow: ${props => (props.checked ? null : 'none')};
`;
