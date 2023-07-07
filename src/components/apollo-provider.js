//adapted from https://grafbase.com/guides/how-to-use-nextauthjs-jwt-auth-with-apollo-client
//https://lyonwj.com/blog/grandstack-podcast-app-next-js-graphql-authentication
import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: "/api/graphql"
})

export const ApolloProviderWrapper = ({ children }) => {

    const authMiddleware = setContext(async (operation, { headers }) => {
      const { token } = await fetch('/api/auth/token').then(res => res.json())

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`
        }
      }
    })
  

    const client = new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache()
    })
  

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}