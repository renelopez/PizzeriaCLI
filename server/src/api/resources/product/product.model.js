import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: ['Product name must be required'],
  },
  description: {
    type: String,
  },

  price: {
    type: Number,
    required: ['Price is required'],
  },

  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order',
  }],


});


export const ProductModel = mongoose.model('product', productSchema);
