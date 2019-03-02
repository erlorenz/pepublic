import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { getNow } from '../../utils/getDates';
import {
  borderColor,
  Control,
  Fieldset,
  Help,
  Icon,
  Label,
  RadioInput,
  RadioLabel,
} from './FieldGroupStyles';
import RadioButton from './RadioButton';

const DoubleRadio = ({
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

  let checked1 = false;
  let checked2 = false;

  if (times.val1)
    checked1 = values[name] === times.val1.valueOf().toString() ? true : false;

  if (times.val2) checked2 = values[name] === times.val2.valueOf().toString();

  const descriptionLong = dt => {
    if (dt.day === getNow().day) return 'Today, ';
    if (dt.day - 1 === getNow().day) return dt.toFormat('EEEE') + ', ';
    if (dt.day - 2 === getNow().day) return dt.toFormat('EEEE') + ', ';
    return '';
  };

  const descriptionShort = dt => {
    if (dt.day === getNow().day) return 'Today, ';
    if (dt.day - 1 === getNow().day) return dt.toFormat('EEE') + ', ';
    if (dt.day - 2 === getNow().day) return dt.toFormat('EEE') + ', ';
    return '';
  };

  // Fade in elements
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>
        {!times.val2 ? (
          <Placeholder style={fadeIn} />
        ) : (
          <FlexContainer style={fadeIn}>
            {times.val1 && (
              <RadioLabel style={fadeIn} checked={checked1} left>
                <RadioButton checked={checked1} />
                <DayLong>{descriptionLong(times.val1)}</DayLong>
                <DayShort>{descriptionShort(times.val1)}</DayShort>
                {` ${times.val1.month}/${times.val1.day}`}
                <RadioInput
                  name={name}
                  type="radio"
                  value={times.val1.valueOf()}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={checked1}
                />
              </RadioLabel>
            )}

            {times.val2 && (
              <RadioLabel style={fadeIn} checked={checked2}>
                <RadioButton checked={checked2} />
                <DayLong>{descriptionLong(times.val2)}</DayLong>
                <DayShort>{descriptionShort(times.val2)}</DayShort>
                {`${times.val2.month}/${times.val2.day}`}
                <RadioInput
                  name={name}
                  type="radio"
                  checked={checked2}
                  value={times.val2.valueOf()}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </RadioLabel>
            )}
          </FlexContainer>
        )}
      </Control>
      <Help>
        {icon}
        {errorMessage}
      </Help>
    </Fieldset>
  );
};

export default DoubleRadio;

const FlexContainer = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Placeholder = styled(FlexContainer)`
  padding: 0.5rem;
  border-radius: ${props => props.borderRadius};
  border: 1px solid ${borderColor};
  background-color: white;
`;

const DayLong = styled.span`
  margin-right: 0.2rem;
  @media (max-width: 374px) {
    display: none;
  }
`;

const DayShort = styled.span`
  margin-right: 0.2rem;
  @media (min-width: 375px) {
    display: none;
  }
`;
