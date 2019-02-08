import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import * as Yup from 'yup';
import Bottombar from '../../components/Bottombar';
import DoubleRadioTrueFalse from '../../components/FieldGroup/DoubleRadioTrueFalse';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import PageInstructions from '../../components/PageInstructions';
import PageTitle from '../../components/PageTitle';
import { GarmentsContext } from '../../contexts/Garments';
import ReviewGarments from './ReviewGarments';
import ReviewSchedule from './ReviewSchedule';

const Review = props => {
  const garments = useContext(GarmentsContext);

  const includesShirt =
    garments.garments.findIndex(g => g.slug === 'shirt') !== -1;

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
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
        provide special instructions.
      </PageInstructions>
      <Container>
        <Formik
          initialValues={{
            starch: null,
            specialInstructions: '',
            crease: null,
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ submitForm, values, ...formikProps }) => (
            <StyledForm>
              <ReviewSchedule history={props.history} />
              <ReviewGarments history={props.history} />

              {includesShirt && (
                <DoubleRadioTrueFalse
                  option1="Light"
                  option2="None"
                  label="Would you like starch in your shirt?"
                  currentValue={values.starch}
                  formikProps={formikProps}
                  name="starch"
                />
              )}

              {includesShirt && (
                <DoubleRadioTrueFalse
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
