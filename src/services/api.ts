import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { getAccessToken } from "./auth";

const httpLink = createHttpLink({
  uri: "http://test.frontend.api.brainny.cc/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    operation.setContext({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});
