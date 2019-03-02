import React from 'react';
import styled from 'styled-components/macro';
import Loading from '../../components/Loading';

function Submitting(props) {
  const { paymentResponse, receiptResponse, textResponse } = props;

  // Waiting on payment
  let displayText = 'Processing payment...';

  // Waiting on email and text
  if (paymentResponse.success) {
    displayText = 'Sending receipt and welcome text...';
  }

  // Waiting on database
  if (
    paymentResponse.success &&
    receiptResponse.success &&
    textResponse.success
  ) {
    displayText = 'Finishing up...';
  }

  return (
    <FullPage>
      <Container>
        <Loading type="Ball-Triangle" color="#42c8e6" />
        <Text>{displayText}</Text>
      </Container>
    </FullPage>
  );
}

export default Submitting;

const FullPage = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #d4dce0d1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin-top: 30vh;
  padding: 0 2rem;
`;

const Text = styled.h2`
  text-align: center;
  font-size: 20px;
`;
