import merge from "lodash.merge";
import { CustomerModel } from "../product/product.model";

const getOrdersByCustomer = async (parent, { _id }, context, info) => {
  return await CustomerModel.findOne({ _id: _id }).select("orders");
};

const getAllCustomers = async (parent, args, context, info) => {
  return await CustomerModel.find({});
};

export const customerResolvers = {
  Query: {
    getOrdersByCustomer,
    getAllCustomers
  },
  Mutation: {}
};
