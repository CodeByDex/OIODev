import { ApolloServer, gql } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { db } from "../../config/connection";

import { schema } from "../../schemas";

const apolloServer  = new ApolloServer({
  schema,
  context: db
});

export default startServerAndCreateNextHandler(apolloServer);
