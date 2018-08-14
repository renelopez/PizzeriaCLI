/* eslint-disable import/prefer-default-export */
import express from 'express';

import productController from './product.controller';

export const productRouter = express.Router();

productRouter.param('id', productController.findByParam);

productRouter.route('/')
  .get(productController.getOne)
  .put(productController.updateOne)
  .delete(productController.createOne);
