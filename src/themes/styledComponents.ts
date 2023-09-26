import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import LinkMUI from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import { TextField } from "@mui/material"

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))

export const CatProfile = styled(Paper)(({ theme }) => ({
  borderRadius: 10,
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  minHeight: 330,
  position: "relative",
}))

export const ProfileLink = styled(LinkMUI)(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(20),
  display: "flex",
  alignItems: "center",
  width: "fit-content",
}))

export const CustomInput = styled(TextField)(({ theme }) => ({
  maxWidth: "130px",
}))
