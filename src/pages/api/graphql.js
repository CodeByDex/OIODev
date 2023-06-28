import { ApolloServer, gql } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
// import { ApolloServer, gql } from 'apollo-server-express';
import { startStandaloneServer } from '@apollo/server/standalone';
import { NextResponse } from 'next/server'

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const apolloServer  = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);

// export default async function handler(req, res) {
//   const { url } = await startStandaloneServer(apolloServer);
//   console.log(`🚀 Server ready at ${url}`);
//   res.status(200);
// }

// const startServer = apolloServer.start();

// export default async function handler(req, res) {
//     await startServer;
//     await apolloServer.createHandler({
//         path: "/api/graphql",
//     })(req, res);
// }

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default apolloServer;