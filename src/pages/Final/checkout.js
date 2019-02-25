import * as Yup from 'yup';
import payment from './payment';

const checkout = async ({
  schedule,
  garments,
  totalPrice,
  options,
  customerDetails,
  token,
  setError,
}) => {
  const { pickupHour, returnHour, hotel, room } = schedule;
  const { specialInstructions, starch, crease } = options;
  const { email, phone, name } = customerDetails;

  const customerOrderItems = garments.map(garment => {
    const { id, ...rest } = garment;
    return rest;
  });

  const schema = Yup.object().shape({
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

  // Make sure minimum price works
  let total_price = totalPrice();
  if (total_price < 3000) {
    total_price = 3000;
  }

  // Main function

  try {
    const dataToSubmit = {
      name,
      phone: phone.toString(),
      email,
      pickup_date: pickupHour,
      return_date: returnHour,
      total_price,
      hotel,
      room,
      starch,
      crease,
      special_instructions: specialInstructions,
      stripeToken: token,
      customerOrderItems,
    };

    console.log(dataToSubmit);

    // Validate function

    await schema.validate(dataToSubmit);

    await payment(setError, dataToSubmit);
  } catch (e) {
    if (e.errors) {
      console.log('[Validation error]', e.errors);
      setError({ type: 'clientValidation', message: e.errors });
      throw new Error('Validation error.');
    } else if (e.response) {
      console.log('[Server error]', e.response.data);
      setError({ type: 'response', message: e.response.data });
      throw new Error('Server errror: ' + e.response.data);
    } else if (e.request) {
      setError({ type: 'request', message: 'Server is not responding.' });
      throw new Error('No response from server.');
    } else {
      console.log(e);
      setError({ type: 'unknown', message: e.message });
      throw new Error('Something strange happened when creating the request.');
    }
  }
};

export default checkout;
