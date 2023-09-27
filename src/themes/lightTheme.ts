import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e7e7e7",
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 5,
      },
    },
  },
})
