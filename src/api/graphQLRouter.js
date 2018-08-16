import { makeExecutableSchema } from 'graphql-tools'
import {productType} from './resources/product';
import merge from 'lodash.merge';
import {graphqlExpress} from 'apollo-server-express'

const baseSchema=`
  schema {
    query:Query
    mutation:Mutation
  }
`;

const graphQLSchema = makeExecutableSchema({
  typeDefs:[
    baseSchema,
    productType
  ]
  // resolvers:merge(
  //   {},
  //   productResolvers
  // )
});

export const graphQLRouter = graphqlExpress((req) => ({
  graphQLSchema,
    context: {
      req
    }
}));
