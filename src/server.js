
import express from 'express';
import { graphiqlExpress } from 'apollo-server-express';

import setupMiddleware from './middleware';
import {connect} from './db';
import { graphQLRouter } from './api';


const app = express();

setupMiddleware(app);

connect();

app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

app.all('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
