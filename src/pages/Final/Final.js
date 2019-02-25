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
import { CenterLoading } from '../../App';
import { Redirect } from 'react-router-dom';

const Final = props => {
  // Is credit card complete
  const [cardComplete, setCardComplete] = React.useState(false);

  // Error and loading states
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({ type: '', message: '' });

  // Responses
  const [receiptResponse, setReceiptResponse] = React.useState({
    success: '',
    message: '',
  });
  const [textResponse, setTextResponse] = React.useState({
    success: '',
    message: '',
  });
  const [dbResponse, setDbResponse] = React.useState({
    success: '',
    message: '',
  });

  const { schedule } = React.useContext(ScheduleContext);
  const { garments, totalPrice } = React.useContext(GarmentsContext);
  const { options } = React.useContext(OptionsContext);

  const handleSubmit = async (values, actions) => {
    const customerDetails = { ...values };

    if (props.stripe) {
      try {
        let token = '';
        try {
          const response = await props.stripe.createToken();
          token = response.token;
          console.log('[Token]', token.id);
        } catch (e) {
          console.log('[Token Error', e.message);
          setError({
            type: 'token',
            message: 'Error verifying card with Stripe Payments.',
          });
          throw new Error('Token error');
        }

        setLoading(true);

        await checkout({
          schedule,
          garments,
          totalPrice,
          options,
          customerDetails,
          token: token.id,
          setError,
          setDbResponse,
          setReceiptResponse,
          setTextResponse,
        });

        // Go to next page
      } catch (e) {
        console.log('[Checkout Error]', e.message);
      } finally {
        setLoading(false);
        actions.setSubmitting(false);
      }
    } else {
      console.log('ERROR: Stripe not loaded');
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

  if (loading) return <CenterLoading />;

  if (dbResponse.success !== '')
    return (
      <Redirect
        to={{
          pathname: '/order/success',
          state: {
            database: dbResponse.success,
            text: textResponse.success,
            receipt: receiptResponse.success,
          },
        }}
      />
    );

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
                {error.type && error.message && (
                  <Notification>{error.message}</Notification>
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

export default injectStripe(Final);

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
        fontSize: '14px',
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
