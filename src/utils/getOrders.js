import axios from 'axios';

const pages = [
  'active',
  'specialorders',
  'cancelled',
  'exceptions',
  'completed',
];

export default async (list, component, prevList) => {
  if (list !== prevList && pages.includes(list)) {
    try {
      const response = await axios.get(`/admin/${list}`);

      component.setState({ orders: response.data, error: false });
    } catch (e) {
      component.setState({ error: true });

      if (e.response) {
        console.log(e.response.data.message);
      } else if (e.request) {
        console.log('Server not responding');
      } else {
        console.log('Something went wrong with request');
      }
    }
  }
};
