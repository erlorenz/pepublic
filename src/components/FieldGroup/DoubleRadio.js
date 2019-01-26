import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CheckedRadio } from '../../assets/img/checkedradio.svg';
import { ReactComponent as UncheckedRadio } from '../../assets/img/uncheckedradio.svg';
import { ScheduleContext } from '../../contexts/Schedule';
import { getNow, getTime } from '../../utils/getDates';
import {
  Control,
  Fieldset,
  Help,
  Icon,
  Label,
  RadioInput,
  RadioLabel,
} from './FieldGroupStyles';

const DoubleRadio = ({ children, label, name, times, ...props }) => {
  const { formikProps, values } = useContext(ScheduleContext);
  const { errors, touched, handleChange, handleBlur } = formikProps;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';
  const icon =
    touched[name] && errors[name] ? <Icon icon={faExclamationCircle} /> : '';

  let checked1 = false;
  if (times.val1)
    checked1 = values[name] === times.val1.valueOf().toString() ? true : false;
  const checked2 = values[name] === times.val2.valueOf().toString();

  const description = unix => {
    const time = getTime(unix);
    if (time.date() === getNow().date()) return 'Today, ';
    if (time.date() - 1 === getNow().date()) return 'Tomorrow, ';
    return '';
  };

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>
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
              />
            </RadioLabel>
          )}

          <RadioLabel checked={checked2}>
            {checked2 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
            {`${description(times.val2)} ${times.val2.month() +
              1}/${times.val2.date()}`}
            <RadioInput
              name={name}
              type="radio"
              value={times.val2.valueOf()}
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

export default DoubleRadio;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledCheckedRadio = styled(CheckedRadio)`
  margin-right: 0.7rem;
`;

const StyledUncheckedRadio = styled(UncheckedRadio)`
  margin-right: 0.7rem;
`;
