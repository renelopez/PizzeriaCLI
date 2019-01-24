import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: ["Product name must be required"]
  },
  description: {
    type: String
  },

  price: [
    {
      size: {
        type: String,
        required: "Size is required"
      },
      quantity: {
        type: Number,
        required: "Quantity is required"
      }
    }
  ],

  recipe: {
    type: String
  }
});

export const ProductModel = mongoose.model("product", productSchema);
