import React from 'react';
import {
  Icon,
  Input,
  Label,
  TextArea,
  Select,
  Fieldset,
  Help,
  Control,
} from './FieldGroupStyles';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const FieldGroup = ({ field, form, ...props }) => {
  const { touched, errors } = form;
  const { name } = field;
  const { label, textarea = false, select = false } = props;

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
        error={touched[name] && errors[name] ? 'true' : undefined}
        {...field}
        {...props}
      />
    );

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
