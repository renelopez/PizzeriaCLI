
import express from 'express';

import setupMiddleware from './middleware';
import {connect} from './db';
import { graphQLRouter } from './api';


const app = express();

setupMiddleware(app);

connect();

graphQLRouter.applyMiddleware({app,path:'/graphql'});

app.all('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
