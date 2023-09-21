import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { purple } from "@mui/material/colors"
import { Tab, ToggleButton } from "@mui/material"
import TextField from "@mui/material/TextField"

export const CustomForwardBack = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#f080ff"),
  backgroundColor: "#f6b3ff",
  "&:hover": {
    backgroundColor: purple[300],
  },
  "&:disabled": {
    backgroundColor: "#969696",
  },
}))

export const CustomInput = styled(TextField)(() => ({
  maxWidth: "130px",
  backgroundColor: "#111212",
  color: "#ffffffe6",
  borderColor: "#666",
}))

export const CustomTabButton = styled(Tab)(() => ({
  color: "#ffffffe6",
  "&:hover": {
    backgroundColor: "#222",
  },
  "&:active": {
    backgroundColor: "#444",
  },
}))

export const CustomToggleButton = styled(ToggleButton)(() => ({
  color: "#ffffffe6",
  "&:hover": {
    backgroundColor: "#222",
  },
  "&:disabled": {
    color: "#666",
  },
}))
