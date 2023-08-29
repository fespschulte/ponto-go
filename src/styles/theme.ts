import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "400",
    borderRadius: "5px", // <-- border radius is same for all variants and sizes
  },
  // Four sizes: xs, sm, md and lg
  // xs = 30 x 30
  // sm = 160 x 50
  // md = 200 x 50
  // lg = 400 x 50
  sizes: {
    xs: {
      fontSize: "base",
      w: "30px",
      h: "30px",
      px: 1,
      py: 1,
    },
    sm: {
      fontSize: "base",
      w: "160px",
      h: "50px",
      px: 4,
      py: 6,
    },
    md: {
      fontSize: "base",
      w: "200px",
      h: "50px",
      px: 4,
      py: 3,
    },
    lg: {
      fontSize: "base",
      w: "400px",
      h: "50px",
      px: 4,
      py: 3,
    },
  },
  // Seven variants
  variants: {
    outline: {
      border: "1px solid",
      borderColor: "white",
      color: "white",
    },
    outlinePurple: {
      border: "1px solid",
      bgColor: "white",
      borderColor: "purple.900",
      color: "purple.900",
    },
    purpleWhite: {
      bg: "purple.800",
      color: "white",
    },
    solidWhite: {
      bg: "white",
      color: "purple.900",
    },
    darkPurpleWhite: {
      bg: "purple.900",
      color: "white",
    },
    transparent: {
      border: "0.5px solid",
      bg: "transparent",
      color: "black",
    },
    transparentDisabled: {
      border: "0.5px solid",
      bg: "transparent",
      color: "black",
      opacity: "0.5",
    },
  },
  defaultProps: {
    size: "sm",
    variant: "purpleWhite",
  },
});

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },

  components: {
    Button,
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
