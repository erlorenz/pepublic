import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CheckedRadio } from '../../assets/img/checkedradio.svg';
import { ReactComponent as UncheckedRadio } from '../../assets/img/uncheckedradio.svg';
import { getNow, getTime } from '../../utils/getDates';
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

  const description = unix => {
    const time = getTime(unix);
    if (time.date() === getNow().date()) return 'Today, ';
    if (time.date() - 1 === getNow().date()) return 'Tomorrow, ';
    if (time.date() - 2 === getNow().date()) return time.format('dddd') + ', ';
    return '';
  };

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>
        {!times.val2 ? (
          <Placeholder />
        ) : (
          <FlexContainer>
            {times.val1 && (
              <RadioLabel checked={checked1} left>
                {checked1 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
                {`${description(times.val1)} ${times.val1.month() +
                  1}/${times.val1.date()}`}
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
              <RadioLabel checked={checked2}>
                {checked2 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
                {`${description(times.val2)} ${times.val2.month() +
                  1}/${times.val2.date()}`}
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

const FlexContainer = styled.div`
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
