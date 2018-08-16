import express from 'express';
import {productRouter} from './resources/product';
import {apiErrorHandler} from './modules/errorHandler';

export const restRouter = express.Router();


restRouter.use('/product',productRouter);
restRouter.use(apiErrorHandler);
