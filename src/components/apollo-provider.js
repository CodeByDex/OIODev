//adapted from https://grafbase.com/guides/how-to-use-nextauthjs-jwt-auth-with-apollo-client
//https://lyonwj.com/blog/grandstack-podcast-app-next-js-graphql-authentication
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getCsrfToken } from "next-auth/react"

const httpLink = new HttpLink({
  uri: "/api/graphql"
})

export const ApolloProviderWrapper = ({ children }) => {

    const client = new ApolloClient({
      link: from([httpLink]),
      cache: new InMemoryCache()
    });
  

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}