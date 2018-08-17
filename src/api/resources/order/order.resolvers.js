import  Product  from './order.model'
import merge from 'lodash.merge'

const getMe = (_, __, {product}) => {
  return product
}

export const orderResolvers = {
  Query: {
    getMe
  }
};
