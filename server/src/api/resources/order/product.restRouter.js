import express from 'express';

import productController from './order.controller';

const productRouter = express.Router();

productRouter.param('id', productController.findByParam);

productRouter.route('/')
  .get(productController.getOne)
  .put(productController.updateOne)
  .delete(productController.createOne);

export default productRouter;
