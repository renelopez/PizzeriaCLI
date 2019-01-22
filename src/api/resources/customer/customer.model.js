import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ["Customer first name must be required"]
  },
  name: {
    type: String,
    required: ["Customer last name must be required"]
  },
  age: {
    type: Number,
    required: ["Age is required"]
  },

  orders: [
    {
      products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
          },
          quantity: {
            type: Number
          },
          price: {
            type: Number
          }
        }
      ]
    }
  ]
});

export const OrderModel = mongoose.model("order", orderSchema);
