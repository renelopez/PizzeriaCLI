import merge from 'lodash.merge'
import {OrderModel} from "./order.model";
import {ProductModel} from "../product/product.model";

const getAllOrders = async (parent,args,context,info) => {
  return await OrderModel.find({});
};

const getOrderById = async (parent,{_id},context,info) => {
  return await OrderModel.findById(_id);
};

const createOrder = async (parent,{input},context,info) => {
  return await OrderModel.create(input);
};

const updateOrder = async (parent,{_id,input},context,info) => {
  return await OrderModel.findOneAndUpdate({_id},input,{new:true});
};

const deleteOrder = async (parent,{_id},context,info) => {
  return await OrderModel.findByIdAndRemove({_id});
};


export const orderResolvers = {
  Query: {
    getAllOrders,
    getOrderById,
  },
  Mutation:{
    createOrder,
    updateOrder,
    deleteOrder
  },
  Order:{
    async products(order){
      const populated = await order
        .populate('products')
        .execPopulate();

      return populated.products;
    }
  }
};
