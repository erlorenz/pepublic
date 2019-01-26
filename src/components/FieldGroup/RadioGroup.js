import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CheckedRadio } from '../../assets/img/checkedradio.svg';
import { ReactComponent as UncheckedRadio } from '../../assets/img/uncheckedradio.svg';
import { ScheduleContext } from '../../contexts/Schedule';
import { getTime } from '../../utils/getDates';
import {
  borderColor,
  Fieldset,
  Help,
  Icon,
  Label,
  RadioInput,
  RadioLabel,
} from './FieldGroupStyles';

const RadioGroup = ({ children, label, name, times, ...props }) => {
  const { formikProps, values } = useContext(ScheduleContext);
  const { errors, touched, handleChange, handleBlur } = formikProps;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';
  const icon =
    touched[name] && errors[name] ? <Icon icon={faExclamationCircle} /> : '';

  const selectedHour = values[name] ? getTime(values[name]) : 0;

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <FlexContainer>
        {times.map(time => (
          <RadioGroupLabel
            key={time}
            checked={time === selectedHour.valueOf()}
            left>
            {time === selectedHour.valueOf() ? (
              <StyledCheckedRadio />
            ) : (
              <StyledUncheckedRadio />
            )}
            {dayjs(time).format('h:mm a')}
            <RadioInput
              name={name}
              type="radio"
              value={time}
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

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const RadioGroupLabel = styled(RadioLabel)`
  z-index: ${props => (props.checked ? 1 : 0)};
  border: ${props =>
    props.checked ? '1px solid ' + props.theme.buttonColor : 'none'};
  box-shadow: ${props => (props.checked ? null : 'none')};
`;
