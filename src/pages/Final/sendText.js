import axios from 'axios';
import axiosError from '../../utils/axiosError';

const sendText = async ({ name, phone }) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/checkout/text',
      { name, phone },
    );
    console.log('[Text]', response.data);
    return response.data;
  } catch (e) {
    return axiosError(e, 'Text');
  }
};

export default sendText;
