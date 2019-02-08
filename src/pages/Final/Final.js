import { Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components/macro';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import FinalBottombar from './FinalBottombar';

const Final = props => {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <>
      <PageTitle>Finalize your order</PageTitle>
      <PageInstructions>
        Fill out the remaining information and click "Finish". When it goes
        through you'll receive an email receipt as well as text/SMS updates.
      </PageInstructions>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', phone: '', email: '' }}>
        {({ values, submitForm, isSubmitting, ...formikProps }) => {
          return (
            <Container>
              <StyledForm>
                <Field
                  name="name"
                  label="Full Name"
                  component={FieldGroup}
                  type="text"
                />
                <Field
                  name="phone"
                  label="Phone (numbers only)"
                  component={FieldGroup}
                  type="number"
                />
                <Field
                  name="email"
                  label="Email"
                  component={FieldGroup}
                  type="text"
                />
                <FinalBottombar
                  history={props.history}
                  submitForm={submitForm}
                  values={values}
                  {...props}
                />
              </StyledForm>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};

export default Final;

const StyledForm = styled(Form)`
  max-width: 450px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
