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

  price: {
    type: Number
  },

  recipe: {
    type: String
  }
});

export const ProductModel = mongoose.model("product", productSchema);
