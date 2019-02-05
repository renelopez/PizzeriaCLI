import { ProductModel } from "../src/api/resources/product/product.model";
import { CustomerModel } from "../src/api/resources/customer/customer.model";
import assert from "assert";

describe("Customer Tests", () => {
  it("Creates a customer", done => {
    const customer = new CustomerModel({
      name: "Rene Jezrael",
      lastName: "Lopez Cano",
      age: 30
    });
    customer
      .save()
      .then(data => {
        console.log(data);
        assert(!customer.isNew);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("Creates a product", done => {
    const product = new ProductModel({
      name: "Pizza Genio",
      description: "The best pizza ever from this company",
      prices: [
        {
          size: "Small",
          quantity: 80
        },
        {
          size: "Medium",
          quantity: 110
        },
        {
          size: "Familiar",
          quantity: 150
        }
      ]
    });
    product
      .save()
      .then(data => {
        console.log(data);
        assert(!product.isNew);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });

  it("Creates an order", done => {
    // Creating product first
    const productLittle = new ProductModel({
      name: "Pizza Genio Chica",
      description: "The best pizza ever from this company",
      price: 80
    });

    const productMedium = new ProductModel({
      name: "Pizza Genio Mediana",
      description: "The best mediana pizza ever from this company",
      price: 120
    });

    const productBig = new ProductModel({
      name: "Pizza Genio Grande",
      description: "The best big pizza ever from this company",
      price: 170
    });

    ProductModel.insertMany([productLittle, productMedium, productBig])
      .then(data => {
        console.log("Inserted Data", data);
        // Creating Customer After
        const customer = new CustomerModel({
          name: "Rene Jezrael",
          lastName: "Lopez Cano",
          age: 30,
          orders: [
            {
              products: [
                {
                  product: data[0]._id,
                  quantity: 3,
                  productTotal: 240
                },
                {
                  product: data[1]._id,
                  quantity: 4,
                  productTotal: 480
                },
                {
                  product: data[2]._id,
                  quantity: 5,
                  productTotal: 850
                }
              ],
              total: 1570
            }
          ]
        });

        customer
          .save()
          .then(data => {
            console.log("This is the customer", data);

            CustomerModel.findOne({ name: "Rene Jezrael" })
              .populate({
                path: "orders.products.product"
              })
              .exec(function(err, populatedField) {
                if (err) {
                  console.log("Error ", err);
                }
                console.log("Customer", populatedField);
                assert(
                  populatedField.orders[0].products[0].product.name ===
                    "Pizza Genio Chica"
                );
                assert(
                  populatedField.orders[0].products[1].product.name ===
                    "Pizza Genio Mediana"
                );
                assert(
                  populatedField.orders[0].products[2].product.name ===
                    "Pizza Genio Grande"
                );

                ///TODO Crear calculo total de la orden hecha.

                done();
              });
          })
          .catch(err => {
            console.log("Error while saving customers", err);
          });
      })
      .catch(err => {
        console.log("Error while inserting products", err);
      });
  });
});
