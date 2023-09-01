import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { MainRoutes } from "./routes";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ApolloProvider } from "@apollo/client";
import { useAppApolloClient } from "./services/api";

function App() {
  const apolloClient = useAppApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <MainRoutes />
          </SidebarDrawerProvider>
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
