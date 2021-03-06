import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components/macro';
import {
  Control,
  Fieldset,
  Help,
  Icon,
  Input,
  Label,
  Select,
  TextArea,
} from './FieldGroupStyles';

const FieldGroup = ({ field, form, children, ...props }) => {
  const { touched, errors } = form;
  const { name } = field;
  const {
    label,
    textarea = false,
    select = false,
    doubleRadio = false,
  } = props;

  let element = (
    <Input
      error={touched[name] && errors[name] ? 'true' : undefined}
      {...field}
      {...props}
    />
  );

  if (textarea)
    element = (
      <TextArea
        as="textarea"
        error={touched[name] && errors[name] ? 'true' : undefined}
        {...field}
        {...props}
      />
    );

  if (select)
    element = (
      <Select
        as="select"
        error={touched[name] && errors[name] ? true : undefined}
        {...field}
        {...props}>
        {children}
      </Select>
    );

  if (doubleRadio) element = <FlexContainer>{children}</FlexContainer>;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';
  const icon =
    touched[name] && errors[name] ? <Icon icon={faExclamationCircle} /> : '';

  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      <Control>{element}</Control>
      <Help>
        {icon}
        {errorMessage}
      </Help>
    </Fieldset>
  );
};

export default FieldGroup;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
