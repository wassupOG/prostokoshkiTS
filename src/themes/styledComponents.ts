import { styled } from "@mui/material/styles"
import LinkMUI from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import { TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const DrawerLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  color: theme.palette.primary.main,
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

export const CatGalleryContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10%",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  maxHeight: "150px",
  maxWidth: "150px",
  transition: "transform 0.1s ease-in-out",
  "&:hover ": {
    cursor: "pointer",
    transform: "scale(1.015)",
    boxShadow: `0px 0px 15px 1px ${theme.palette.secondary.main}`,
  },
}))

export const CatNameGallery = styled(Typography)(() => ({
  position: "absolute",
  width: "max-content",
  left: "50%",
  transform: "translateX(-50%)",
}))

export const CustomInput = styled(TextField)(() => ({
  maxWidth: "130px",
}))

export const CustomNav = styled("nav")(({ theme }) => ({
  justifyContent: "flex-start",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down(480)]: {
    justifyContent: "center",
    height: "50px",
    bottom: 0,
    borderBottom: "none",
    top: "auto",
    borderTop: `1px solid ${theme.palette.divider}`,

    ".logo-link": {
      display: "none",
    },
  },
}))
