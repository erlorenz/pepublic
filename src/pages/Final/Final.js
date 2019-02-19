import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components/macro';
import * as Yup from 'yup';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import {
  borderColor,
  errorColor,
  Label,
} from '../../components/FieldGroup/FieldGroupStyles';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import { GarmentsContext } from '../../contexts/Garments';
import { OptionsContext } from '../../contexts/Options';
import { ScheduleContext } from '../../contexts/Schedule';
import theme from '../../styles/theme';
import FinalBottombar from './FinalBottombar';
import checkout from './checkout';
import { Notification } from '../../components/UI';

const _Final = props => {
  const [cardComplete, setCardComplete] = React.useState(false);
  const { schedule } = React.useContext(ScheduleContext);
  const { garments, totalPrice } = React.useContext(GarmentsContext);
  const { options } = React.useContext(OptionsContext);

  const handleSubmit = async (values, actions) => {
    const customerDetails = { ...values };

    if (props.stripe) {
      try {
        const { token } = await props.stripe.createToken();
        console.log('[Token]', token.id);
        const response = await checkout(
          schedule,
          garments,
          totalPrice,
          options,
          customerDetails,
          token.id,
        );

        console.log(response);
      } catch (e) {
        console.log('Error on final component', e.message);
        actions.setStatus({ error: e.message });
      } finally {
        actions.setSubmitting(false);
      }
    } else {
      console.log('Stripe not loaded');
      actions.setSubmitting(false);
    }
  };

  const handleCardComplete = args => {
    if (args.complete) {
      setCardComplete(true);
    } else {
      setCardComplete(false);
    }
  };

  const finalPageSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'The name you entered is too short')
      .required('Please enter your full name.'),
    phone: Yup.string()
      .length(10, 'Please enter exactly 10 digits.')
      .required('Please enter your 10 digit phone number.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Please enter your email address.'),
  });

  return (
    <>
      <PageTitle>Finalize your order</PageTitle>
      <PageInstructions>
        Fill out the remaining information and click "Finish". When it goes
        through you'll receive an email receipt as well as text/SMS updates.
      </PageInstructions>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', phone: '', email: '' }}
        validationSchema={finalPageSchema}>
        {({ values, submitForm, isSubmitting, status, ...formikProps }) => {
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
                  label="Phone"
                  component={FieldGroup}
                  max="9999999999"
                  placeholder="10 digits (numbers only)"
                  type="number"
                />
                <Field
                  name="email"
                  label="Email"
                  component={FieldGroup}
                  type="text"
                />
                <Label>Card details</Label>
                <StyledCardElement
                  onChange={handleCardComplete}
                  {...createOptions()}
                />
                {status && status.error && (
                  <Notification>{status.error}</Notification>
                )}
                <FinalBottombar
                  history={props.history}
                  isSubmitting={isSubmitting}
                  submitForm={submitForm}
                  values={values}
                  cardComplete={cardComplete}
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

  input::placeholder {
    color: #aab7c4;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCardElement = styled(CardElement)`
  background-color: white;
  padding: 1rem 1rem;
  border: 1px solid ${borderColor};
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  border-radius: 4px;

  &.StripeElement--invalid {
    border: 1px solid ${errorColor};
  }
`;

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '1rem',
        color: theme.textColor,
        // fontFamily: 'Open Sans',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: errorColor,
      },
    },
  };
};
