import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:['Product name must be required']
  },
  description:{
    type:String
  },

  price:{
    type:Number,
    required:['Price is required']
  },

  products:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'product'
  }]


});



export const OrderModel = mongoose.model('order',orderSchema);
