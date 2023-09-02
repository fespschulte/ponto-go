import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { MainRoutes } from "./routes";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
// import { AuthProvider } from "./contexts/AuthContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/api";

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <MainRoutes />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

{
  /* <AuthProvider>
</AuthProvider> */
}
