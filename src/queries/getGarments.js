import gql from 'graphql-tag';

const GET_GARMENTS = gql`
  query getGarments {
    getGarments {
      id
      price
      slug
      description
      list_order
    }
  }
`;

export default GET_GARMENTS;
