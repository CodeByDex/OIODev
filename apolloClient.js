import { ApolloClient, InMemoryCache } from "@apollo/client";

export default client = new ApolloClient({
    uri: process.env.MONGODB_URI,
    cache: new InMemoryCache,
});