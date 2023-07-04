import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from '@as-integrations/next'
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

import { db } from "../../config/connection";
import { schema } from "../../schemas";
// import allowCors from "@/utils/cors"

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";



const apolloServer = new ApolloServer({
  schema,
  context: db,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    let LoggedIn = false;
    if (session) {
      LoggedIn = true;
    }

    return { LoggedIn }
  }
})

export default handler;
// export default allowCors(handler)
