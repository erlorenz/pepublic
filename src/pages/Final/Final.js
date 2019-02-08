import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components/macro';
import * as Yup from 'yup';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import { Label } from '../../components/FieldGroup/FieldGroupStyles';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import FinalBottombar from './FinalBottombar';

const _Final = props => {
  const [cardComplete, setCardComplete] = React.useState(false);

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
    actions.setSubmitting(false);
  };

  const handleCardChange = args => {
    console.log(args, args.complete);
    if (args.complete) {
      setCardComplete(true);
    } else {
      setCardComplete(false);
    }
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Please enter your full name.'),
    phone: Yup.required('Please enter your 10 digit phone number.'),
    email: Yup.email('Please enter a valid email address.').required(
      'Please enter your email address.',
    ),
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
        validationSchema={schema}>
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
                <Label>Card details</Label>
                <StyledCardElement onChange={handleCardChange} />
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
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCardElement = styled(CardElement)`
  background-color: blue;
`;

// const createOptions = () => {
//   return {
//     style: {
//       base: {
//         fontSize: '14px',
//         color: '#424770',
//         backgroundColor: 'white',
//         fontFamily: 'inherit',
//         padding: 'calc(0.8rem - 1px) 1rem',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//         ':focus': {
//           borderColor: focusedBorderColor,
//           boxShadow: focusedBoxShadow,
//         },
//       },
//       invalid: {
//         borderColor: errorColor,
//         boxShadow: errorBoxShadow,
//       },
//     },
//   };
// };
