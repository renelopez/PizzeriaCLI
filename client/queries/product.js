import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($type: NewProduct!) {
    createProduct(type: $type) {
      name
      description
      recipe
      price
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  {
    getAllProducts {
      id
      name
      description
    }
  }
`;
