import  Product  from './product.model'
import merge from 'lodash.merge'

const getMe = (_, __, {product}) => {
  return product
}

export const productResolvers = {
  Query: {
    getMe
  }
};
