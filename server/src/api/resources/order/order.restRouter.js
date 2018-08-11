import express from 'express';

import orderController from './order.controller';

const orderRouter = express.Router();

orderRouter.param('id', orderController.findByParam);

orderRouter.route('/')
  .get(orderController.getOne)
  .put(orderController.updateOne)
  .delete(orderController.createOne);

export default orderRouter;
