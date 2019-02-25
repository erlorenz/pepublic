import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components/macro';
import { ReactComponent as CheckedRadio } from '../../assets/img/checkedradio.svg';
import { ReactComponent as UncheckedRadio } from '../../assets/img/uncheckedradio.svg';
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

  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>
        {!times.val2 ? (
          <Placeholder style={springProps} />
        ) : (
          <FlexContainer style={springProps}>
            {times.val1 && (
              <RadioLabel style={springProps} checked={checked1} left>
                {checked1 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
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
              <RadioLabel style={springProps} checked={checked2}>
                {checked2 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
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

const StyledCheckedRadio = styled(CheckedRadio)`
  margin-right: 0.7rem;
`;

const StyledUncheckedRadio = styled(UncheckedRadio)`
  margin-right: 0.7rem;
`;

const DayLong = styled.span`
  @media (max-width: 374px) {
    display: none;
  }
`;

const DayShort = styled.span`
  @media (min-width: 375px) {
    display: none;
  }
`;
