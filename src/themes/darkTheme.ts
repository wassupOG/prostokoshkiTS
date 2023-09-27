import { createTheme } from "@mui/material/styles"

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 10,
      },
    },
  },
})
