import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { MainRoutes } from "./routes";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <MainRoutes />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
