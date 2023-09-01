import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuthToken } from "./auth";

const httpLink = createHttpLink({
  uri: "http://test.frontend.api.brainny.cc/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = useAuthToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
