import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI,
});

const customHeaders = setContext((_, { headers }) => {
  return {
    headers: {
      "x-mock-match-request-body": true,
    },
  };
});

export const client = new ApolloClient({
  link: customHeaders.concat(httpLink),
  cache: new InMemoryCache(),
});