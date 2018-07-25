import mongoose from 'mongoose';
import appConfig from './config';

mongoose.Promise = global.Promise;

const connect = (config = appConfig) => mongoose.connect(config.db.url, {
  useMongoClient: true,
});

export default connect;
