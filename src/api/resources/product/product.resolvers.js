import {ProductModel}  from './product.model'
import {OrderModel} from "../order/order.model";
import merge from 'lodash.merge'

const getAllProducts = async (parent,args,context,info) => {
  return await ProductModel.find({});
};

const getProductById = async (parent,{_id},context,info) => {
  return await ProductModel.findById(_id);
};

const createProduct = async (parent,{input},context,info) => {
  return await ProductModel.create(input);
};

const updateProduct = async (parent,{_id,input},context,info) => {
  return await ProductModel.findOneAndUpdate({_id},input,{new:true});
};

const deleteProduct = async (parent,{_id},context,info) => {
  return await ProductModel.findByIdAndRemove({_id});
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
  },
  Product:{
    async orders(product){
      const populated = await product
        .populate('orders')
        .execPopulate();

      return populated.orders;
    }
  }
};
