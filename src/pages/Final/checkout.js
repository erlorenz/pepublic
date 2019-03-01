import schema from './checkoutSchema';
import payment from './payment';
import dbTransaction from './dbTransaction';
import sendReceiptEmail from './sendReceiptEmail';
import sendText from './sendText';

const checkout = async ({
  schedule,
  garments,
  totalPrice,
  options,
  customerDetails,
  token,
  setError,
  setDbResponse,
  setReceiptResponse,
  setTextResponse,
  setPaymentResponse,
}) => {
  const { pickupHour, returnHour, hotel, room } = schedule;
  const { specialInstructions, starch, crease } = options;
  const { email, phone, name } = customerDetails;

  const customerOrderItems = garments.map(garment => {
    const { id, ...rest } = garment;
    return rest;
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

    // Payment function - returns stripe_charge, stripe_customer, phone
    // Ends the transaction if there's an error and displays to customer
    const paymentResponse = await payment(setError, dataToSubmit);
    setPaymentResponse({ success: true });

    // Add some properties for the rest
    dataToSubmit.phone = paymentResponse.phone;
    dataToSubmit.stripe_charge = paymentResponse.stripe_charge;
    dataToSubmit.stripe_customer = paymentResponse.stripe_customer;
    delete dataToSubmit.stripeToken;

    // Email, Database, and Text concurrent (all return success and message)
    const [receiptResponse, textResponse, dbResponse] = await Promise.all([
      sendReceiptEmail(dataToSubmit),
      sendText(dataToSubmit),
      dbTransaction(dataToSubmit),
    ]);
    // Set the states of each
    setReceiptResponse(receiptResponse);
    setTextResponse(textResponse);
    setDbResponse(dbResponse);
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
