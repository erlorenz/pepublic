import axios from 'axios';
import axiosError from '../../utils/axiosError';

const sendReceiptEmail = async dataToSubmit => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/checkout/receipt',
      dataToSubmit,
    );
    console.log('[Receipt]', response.data);
    return response.data;
  } catch (e) {
    return axiosError(e, 'Receipt');
  }
};

export default sendReceiptEmail;
