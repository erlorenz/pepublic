import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Please enter your name.'),
  phone: Yup.number().required('Please enter a 10 digit phone number.'),
  email: Yup.string().required('Please enter a valid email address.'),
  pickup_date: Yup.string().required('Please choose a pickup time.'),
  return_date: Yup.string().required('Please choose a return time.'),
  hotel: Yup.string().required('Please choose a hotel.'),
  room: Yup.string().required('Please choose a room.'),
  total_price: Yup.number().required(
    'The total price is calculating incorrectly.',
  ),
  starch: Yup.string().required('Choose light or no starch for your shirts.'),
  crease: Yup.string().required(
    'Choose if you would like your dress shirt sleeves creased.',
  ),
  special_instructions: Yup.string().nullable(),
  stripeToken: Yup.string().required('Token missing.'),
  customerOrderItems: Yup.array()
    .min(1, '0 items selected.')
    .required('No items selected.'),
});
