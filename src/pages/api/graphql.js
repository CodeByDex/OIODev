import { ApolloServer, gql } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { schema } from "../../schemas";

const apolloServer  = new ApolloServer({
  schema
});

export default startServerAndCreateNextHandler(apolloServer);
