import { ApolloServer, gql } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import {mongooseConnection} from  "../../config/connection";

import { schema } from "../../schemas";

const apolloServer  = new ApolloServer({
  schema,
  context: mongooseConnection
});

export default startServerAndCreateNextHandler(apolloServer);
