/* eslint-disable import/prefer-default-export */
import express from 'express';

import orderController from './order.controller';

export const orderRouter = express.Router();

orderRouter.param('id', orderController.findByParam);

orderRouter.route('/')
  .get(orderController.getOne)
  .put(orderController.updateOne)
  .delete(orderController.createOne);

