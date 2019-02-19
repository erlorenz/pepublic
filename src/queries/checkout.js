import gql from 'graphql-tag';

const CHECKOUT = gql`
  mutation Checkout(
    $name: String!
    $phone: String!
    $email: String!
    $total_price: Int!
    $hotel: String!
    $room: String!
    $pickup_date: String!
    $return_date: String!
    $starch: String!
    $crease: String!
    $special_instructions: String
    $promo_code: String
    $stripeToken: String!
    $customerOrderItems: [CustomerOrderItemInput!]!
  ) {
    checkout(
      name: $name
      phone: $phone
      email: $email
      total_price: $total_price
      hotel: $hotel
      room: $room
      pickup_date: $pickup_date
      return_date: $return_date
      starch: $starch
      crease: $crease
      special_instructions: $special_instructions
      promo_code: $promo_code
      stripeToken: $stripeToken
      customerOrderItems: $customerOrderItems
    ) {
      database {
        success
        message
      }
      twilio {
        success
        message
      }
      errorEmail {
        success
        message
      }
      receiptEmail {
        success
        message
      }
    }
  }
`;

export default CHECKOUT;
