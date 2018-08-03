import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:['Product name must be required']
  },
  price:{
    type:Number,


  }
});

export const ProductModel = mongoose.model('product',productSchema);
