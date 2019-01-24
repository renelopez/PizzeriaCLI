import mongoose, { mongo } from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/pizzeria");

mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", error => {
    console.warn("Error: ", error);
  });

beforeEach(done => {
  mongoose.connection.collections.customers.drop(() => {
    mongoose.connection.collections.products.drop(() => {
      done();
    });
  });
});
