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
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            "&:hover": {
              background: theme.palette.grey[800],
            },
          }),
      },
    },
  },
})
