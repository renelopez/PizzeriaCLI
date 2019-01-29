import { ApolloServer, makeExecutableSchema, gql } from "apollo-server-express";
import merge from "lodash.merge";
import { productType, productResolvers } from "./resources/product";

const baseSchema = gql`
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [baseSchema, productType],
  resolvers: merge({}, productResolvers)
});

export const graphQLRouter = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req
  })
});
