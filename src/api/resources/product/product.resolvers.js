import  Product  from './product.model'
import merge from 'lodash.merge'

const getMe = (_, __, {product}) => {
  return "product Mocked"
}

export const productResolvers = {
  Query: {
    getMe
  }
};
