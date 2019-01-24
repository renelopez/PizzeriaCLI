import Product from "../product/product.model";
import Customer from "./customer.model";
import assert from "assert";

describe("Customer Tests", () => {
  it("Creates a customer", () => {
    const customer = new Customer({
      name: "Rene Jezrael",
      lastName: "Lopez Cano",
      age: 30
    });
    customer.save().then(() => {
      assert(!customer.isNew);
      done();
    });
  });
});
