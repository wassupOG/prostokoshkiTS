import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import LinkMUI from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import { TextField, Typography } from "@mui/material"

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

export const CatNameGallery = styled(Typography)(({ theme }) => ({
  position: "absolute",
  width: "max-content",
  left: "50%",
  transform: "translateX(-50%)",
}))

export const CustomInput = styled(TextField)(({ theme }) => ({
  maxWidth: "130px",
}))

export const CustomNav = styled("nav")(({ theme }) => ({
  width: "70px",
  position: "fixed",
  left: 0,
  zIndex: 100,
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down(480)]: {
    flexDirection: "row",
    overflow: "hidden",
    position: "fixed",
    top: "auto",
    bottom: 0,
    width: "100%",
    borderBottom: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    border: "none",
    borderTop: `1px solid ${theme.palette.divider}`,
    minHeight: "50px",
  },
}))
