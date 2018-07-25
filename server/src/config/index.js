/* eslint-disable global-require */
import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;

const baseConfig = {
  port: 3000,
  secrets: {},
  db: {
    url: 'http://localhost/pizza',
  },
};

let envConfig = {};

switch (env) {
  case 'development':
    envConfig = require('./dev').config;
    break;
  case 'test':
    envConfig = require('./test').config;
    break;
  case 'prod': case 'production': envConfig = require('./prod').config;
    break;
  default: envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
