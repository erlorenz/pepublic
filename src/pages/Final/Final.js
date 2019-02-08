import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components/macro';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import {
  errorBoxShadow,
  errorColor,
  focusedBorderColor,
  focusedBoxShadow,
} from '../../components/FieldGroup/FieldGroupStyles';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import FinalBottombar from './FinalBottombar';

const _Final = props => {
  const handleSubmit = async (values, actions) => {
    console.log(values);
    if (props.stripe) {
      try {
        const token = await props.stripe.createToken();
        console.log('[Token]', token);
      } catch (e) {
        console.log('Error:', e.message);
      }
    } else {
      console.log('Stripe not loaded');
    }
  };

  const handleCardChange = props => {
    console.log(props);
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
                <label>Card details</label>
                <CardElement onChange={handleCardChange} {...createOptions()} />
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

const Final = injectStripe(_Final);
export default Final;

const StyledForm = styled(Form)`
  max-width: 450px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '14px',
        color: '#424770',
        backgroundColor: 'white',
        fontFamily: 'inherit',
        padding: 'calc(0.8rem - 1px) 1rem',
        '::placeholder': {
          color: '#aab7c4',
        },
        ':focus': {
          borderColor: focusedBorderColor,
          boxShadow: focusedBoxShadow,
        },
      },
      invalid: {
        borderColor: errorColor,
        boxShadow: errorBoxShadow,
      },
    },
  };
};
