import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from '@as-integrations/next'
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

import {mongooseConnection} from  "../../config/connection";

import { schema } from "../../schemas";
// import allowCors from "@/utils/cors"

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";



const apolloServer = new ApolloServer({
  schema,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
  context: mongooseConnection
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  //info for context and how it is used for securing graphql can be found: https://www.apollographql.com/docs/apollo-server/security/authentication/
  context: async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    let LoggedIn = false;
    if (session) {
      LoggedIn = true;
    }

    return { LoggedIn, ...session }
  }
})

export default handler;
// export default allowCors(handler)
