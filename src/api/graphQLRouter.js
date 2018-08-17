import { makeExecutableSchema } from 'graphql-tools'
import {productType,productResolvers} from './resources/product';
import {orderType} from './resources/order';
import merge from 'lodash.merge';
import {graphqlExpress} from 'apollo-server-express'

const baseSchema=`
  schema {
    query: Query
  }
`;

const graphQLSchema = makeExecutableSchema({
  typeDefs:[
    baseSchema,
    productType,
    orderType
  ],
  resolvers:merge(
    {},
    productResolvers
  )
});

export const graphQLRouter = graphqlExpress((req) => ({
  graphQLSchema,
  context: {
    req
  }
}));
