import dayjs from 'dayjs';
import * as Yup from 'yup';

const checkout = async ({
  schedule,
  garments,
  totalPrice,
  options,
  customerDetails,
  token,
  mutate,
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

  try {
    const dataToSubmit = {
      name,
      phone: phone.toString(),
      email,
      pickup_date: pickupHour,
      return_date: returnHour,
      total_price: totalPrice(),
      hotel,
      room,
      starch,
      crease,
      special_instructions: specialInstructions,
      stripeToken: token,
      customerOrderItems,
    };

    console.log(dataToSubmit);

    try {
      await schema.validate(dataToSubmit);
      console.log('validated');
    } catch (e) {
      if (e.errors) throw new Error(e.errors);
      console.log(e);
    }

    const serverResponse = await mutate({ variables: dataToSubmit });
    return serverResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default checkout;
