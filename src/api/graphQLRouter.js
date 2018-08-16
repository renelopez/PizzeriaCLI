import { makeExecutableSchema } from 'graphql-tools'
import {ProductType,ProductResolvers} from './resources/product';
import merge from 'lodash.merge';

import {graphiqlExpress} from 'apollo-server-express'

const baseSchema=`
  schema {
    query:Query
    mutation:Mutation
  }
`;

const graphQlSchema = makeExecutableSchema({

})
