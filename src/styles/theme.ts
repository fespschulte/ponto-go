import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    purple: {
      900: "#330693",
      800: "#8A53FF",
    },
    grey: "#20292E",
    modal: "rgba(79, 79, 79, 0.2)",
    white: "#FFF",
  },
});
