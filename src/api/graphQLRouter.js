import {ApolloServer,makeExecutableSchema,gql} from 'apollo-server-express'
import merge from 'lodash.merge';
import {productType,productResolvers} from './resources/product';
import {orderType,orderResolvers} from './resources/order';

const baseSchema=gql`
  schema {
    query: Query
    mutation:Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs:[
    baseSchema,
    productType,
    orderType
  ],
  resolvers:merge(
    {},
    productResolvers,
    orderResolvers
  )
});

export const graphQLRouter = new ApolloServer({
  schema,
  context:({req,res}) =>({
   req
  })
});
