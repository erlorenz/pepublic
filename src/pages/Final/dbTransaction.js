import axios from 'axios';

const dbTransaction = async dataToSubmit => {
  console.log('[Data being submitted to DB]', dataToSubmit);
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/checkout/dbtransaction',
      dataToSubmit,
    );

    console.log('[DB Response]', response.data);
    return response.data;
  } catch (e) {
    if (e.response) {
      console.log('[Database]', e.response.data);

      return {
        success: false,
        message: 'Error unknown: see console.',
      };
    } else if (e.request) {
      console.log('[Database]', e.request);

      return {
        success: false,
        message: 'Error unknown: see console.',
      };
    } else {
      console.log('[Database]', e);
      return {
        success: false,
        message: 'Error unknown: see console.',
      };
    }
  }
};

export default dbTransaction;
