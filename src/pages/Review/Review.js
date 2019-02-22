import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import * as Yup from 'yup';
import Bottombar from '../../components/Bottombar';
import DoubleRadioYesNo from '../../components/FieldGroup/DoubleRadioYesNo';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import { GarmentsContext } from '../../contexts/Garments';
import { OptionsContext } from '../../contexts/Options';
import ReviewGarments from './ReviewGarments';
import ReviewSchedule from './ReviewSchedule';
import terms from './terms';

const Review = props => {
  const garments = useContext(GarmentsContext);
  const options = useContext(OptionsContext);

  const includesDressShirt =
    garments.garments.findIndex(g => g.slug === 'shirtdress') !== -1;

  const handleSubmit = (values, actions) => {
    try {
      options.setOptions(values);
      actions.setSubmitting(false);
      props.history.push('/order/final');
    } catch (e) {
      console.log(e.message);
    }
  };

  const schema = Yup.object().shape({
    starch: Yup.string().required(),
    crease: Yup.string().required(),
    specialInstructions: Yup.string(),
  });

  return (
    <>
      <PageTitle>Does everything look good?</PageTitle>
      <PageInstructions>
        Review the selected times and garments - you can always go back to edit
        by clicking on the section. Also choose any available options and/or
        provide special instructions. Our terms are conditions are below as
        well.
      </PageInstructions>
      <Container>
        <Formik
          initialValues={
            options.options || {
              starch: 'no',
              specialInstructions: '',
              crease: 'no',
            }
          }
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ submitForm, values, ...formikProps }) => (
            <StyledForm>
              <ReviewSchedule history={props.history} />
              <ReviewGarments history={props.history} />

              {includesDressShirt && (
                <DoubleRadioYesNo
                  option1="Light"
                  option2="None"
                  label="Would you like starch in your shirt?"
                  currentValue={values.starch}
                  formikProps={formikProps}
                  name="starch"
                />
              )}

              {includesDressShirt && (
                <DoubleRadioYesNo
                  option1="Yes"
                  option2="No"
                  label="Would you like us to crease your shirt sleeves?"
                  currentValue={values.crease}
                  formikProps={formikProps}
                  name="crease"
                />
              )}

              <Field
                name="specialInstructions"
                component={FieldGroup}
                label="Any special instructions?"
                values={values}
                formikProps={formikProps}
                textarea
              />
              <Bottombar review {...props} submitForm={submitForm} />
            </StyledForm>
          )}
        </Formik>
      </Container>
      <Terms>
        <P>{terms}</P>
      </Terms>
    </>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  max-width: 450px;
`;

const Terms = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
`;

const P = styled.p`
  font-size: 0.8rem;

  @media (min-width: 500px) {
    width: 70%;
  }
`;
