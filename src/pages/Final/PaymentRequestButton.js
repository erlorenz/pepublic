import React from 'react';
import { PaymentRequestButtonElement } from 'react-stripe-elements';

class PaymentRequestButton extends React.Component {
  constructor(props) {
    super(props);

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Total',
        amount: props.totalPrice(),
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true,
    });

    paymentRequest.on('token', ({ complete, token, ...data }) => {
      complete('success');
      console.log('Received Stripe token: ', token);
      alert('Received token!');
      console.log('Received customer information: ', data);
      alert(
        `Customer info: ${data.payerName} ${data.payerEmail} ${
          data.payerPhone
        }`,
      );
    });

    paymentRequest.canMakePayment().then(result => {
      console.log('Result for payment request is', result);
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest: window.paymentRequest,
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <>
        <PaymentRequestButtonElement
          paymentRequest={this.state.paymentRequest}
          className="PaymentRequestButton"
          style={{
            // For more details on how to style the Payment Request Button, see:
            // https://stripe.com/docs/elements/payment-request-button#styling-the-element
            paymentRequestButton: {
              theme: 'dark',
              height: '64px',
            },
          }}
        />
        <p>--OR--</p>
      </>
    ) : null;
  }
}
export default PaymentRequestButton;
