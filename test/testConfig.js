import mongoose, { mongo } from "mongoose";

mongoose.Promise = global.Promise;

var promise = mongoose.connect(
  "mongodb://localhost/pizzeria",
  {
    useMongoClient: true
    /* other options */
  }
);

promise
  .then(() => {
    console.log("connected");
  })
  .catch(error => {
    console.warn("Error: ", error);
  });

beforeEach(done => {
  mongoose.connection.collections.customers.drop(() => {
    mongoose.connection.collections.products.drop(() => {
      done();
    });
  });
});
