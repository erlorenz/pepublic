import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CheckedRadio } from '../../assets/img/checkedradio.svg';
import { ReactComponent as UncheckedRadio } from '../../assets/img/uncheckedradio.svg';
import { ScheduleContext } from '../../contexts/Schedule';
import {
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
  val1,
  val2,
  single,
  ...props
}) => {
  const { formikProps, values } = useContext(ScheduleContext);
  const { errors, touched, handleChange, handleBlur } = formikProps;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';
  const icon =
    touched[name] && errors[name] ? <Icon icon={faExclamationCircle} /> : '';

  const checked1 = values[name] === val1.toString();
  const checked2 = values[name] === val2.toString();

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>
        <FlexContainer>
          <RadioLabel checked={checked1} left>
            {checked1 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
            {val1}
            <RadioInput
              name={name}
              type="radio"
              value={val1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </RadioLabel>
          {!single && (
            <RadioLabel checked={checked2}>
              {checked2 ? <StyledCheckedRadio /> : <StyledUncheckedRadio />}
              {val2}
              <RadioInput
                name={name}
                type="radio"
                value={val2}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </RadioLabel>
          )}
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
  margin-right: 1rem;
`;

const StyledUncheckedRadio = styled(UncheckedRadio)`
  margin-right: 1rem;
`;
