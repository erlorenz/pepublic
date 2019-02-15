import gql from 'graphql-tag';

const CHECKOUT = gql`
  mutation checkout(
    $name: String!
    $email: String!
    $hotel: String!
    $room: String!
    $total_price: Int!
    $phone: String!
    $pickup_date: String!
    $return_date: String!
    $starch: Boolean!
    $crease: Boolean!
    $special_instructions: String
    $promo_code: String
    $customerOrderItems: [CustomerOrderItemInput!]!
    $stripeToken: String!
  ) {
    checkout(
      payload: {
        name: $name
        email: $email
        hotel: $hotel
        room: $room
        total_price: $total_price
        phone: $phone
        pickup_date: $pickup_date
        return_date: $return_date
        starch: $starch
        crease: $crease
        stripeToken: $stripeToken
        special_instructions: $special_instructions
        customerOrderItems: $customerOrderItems
        promo_code: $promo_code
      }
    ) {
      database {
        success
        message
      }
      twilio {
        success
        message
      }

      receiptEmail {
        success
        message
      }
      errorEmail {
        success
        message
      }
    }
  }
`;

export default CHECKOUT;
