import axios from 'axios';

const payment = async (setError, dataToSubmit) => {
  try {
    const paymentResponse = await axios.post(
      process.env.REACT_APP_API_URL + '/checkout/payment',
      dataToSubmit,
    );
    // If response says there was an error
    if (paymentResponse.error) {
      setError({
        type: paymentResponse.error,
        message: paymentResponse.message,
      });
      throw new Error(paymentResponse.message);
    }
    console.log('[Payment Response', paymentResponse.data);
    return paymentResponse.data;
  } catch (e) {
    if (e.response) {
      console.log('[Payment/Validation]', e.response.data);
      throw new Error(
        'There was an error with payment. Your card has not been charged.',
      );
    } else if (e.request) {
      console.log('[Payment/validation]', e.request);
      throw new Error('There was an error reaching the server.');
    } else {
      console.log('[Payment/validation]', e);
      throw new Error('There was an error with payment.');
    }
  }
};

export default payment;
