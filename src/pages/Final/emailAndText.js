import axios from 'axios';

const emailAndText = async dataToSubmit => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/checkout/emailandtext',
      dataToSubmit,
    );
    console.log('[ETResponse]', response.data);
    return response.data;
  } catch (e) {
    if (e.response) {
      console.log('[Email and Text]', e.response.data);

      return {
        receiptResponse: {
          success: false,
          message: 'Error unknown: see console.',
        },
        textResponse: {
          success: false,
          message: 'Error unknown: see console.',
        },
      };
    } else if (e.request) {
      console.log('[Email and Text]', e.request);

      return {
        receiptResponse: {
          success: false,
          message: 'Error unknown: see console.',
        },
        textResponse: {
          success: false,
          message: 'Error unknown: see console.',
        },
      };
    } else {
      console.log('[Email and Text]', e);
      return {
        receiptResponse: {
          success: false,
          message: 'Error unknown: see console.',
        },
        textResponse: {
          success: false,
          message: 'Error unknown: see console.',
        },
      };
    }
  }
};

export default emailAndText;
