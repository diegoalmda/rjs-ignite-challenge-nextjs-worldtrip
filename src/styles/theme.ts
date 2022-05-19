import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#1C1401",
      "800": "#1D1D1D",
      "700": "#47585B", // dark/headings and text
      "500": "#999999", // dark/info
      "200": "#1c140159",
      "100": "#DADADA", // light/info
      "50": "#F5F8FA", // light/headings and text
    },
    yellow: {
      "300": "#FFBA08", // highlight
      "100": "#ffba0880"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700'
      }
    }
  }
})