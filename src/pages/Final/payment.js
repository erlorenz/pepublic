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
      setError({ type: 'payment', message: 'Error with payment.' });
      throw new Error('Payment response error');
    } else if (e.request) {
      console.log('[Payment/validation]', e.request);
      setError({ type: 'payment', message: 'Error with payment.' });
      throw new Error('Payment request error');
    } else {
      console.log('[Payment/validation]', e);
      throw new Error('Payment error');
    }
  }
};

export default payment;
