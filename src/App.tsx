import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { MainRoutes } from "./routes";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <MainRoutes />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
