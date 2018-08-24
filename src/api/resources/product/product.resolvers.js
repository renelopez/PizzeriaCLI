import  {ProductModel}  from './product.model'
import merge from 'lodash.merge'

const getAllProducts = async (parent,args,context,info) => {
  return await ProductModel.find({});
};

const getProductById = async (parent,args,context,info) => {
  return await ProductModel.find({});
};

const createProduct = async (parent,args,context,info) => {
  return await ProductModel.find({});
};

const updateProduct = async (parent,args,context,info) => {
  return await ProductModel.find({});
};

const deleteProduct = async (parent,args,context,info) => {
  return await ProductModel.find({});
};

export const productResolvers = {
  Query: {
    getAllProducts,
    getProductById
  },
  Mutation:{
    createProduct,
    updateProduct,
    deleteProduct
  }
};
