import { Link } from "react-router-dom"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import PetsIcon from "@mui/icons-material/Pets"
import HomeIcon from "@mui/icons-material/Home"
import { CustomNav, DrawerLink } from "../themes/styledComponents"
import Button from "@mui/material/Button"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone"
import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const links = [
  {
    name: "О нас",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Забрать кота",
    url: "/search",
    icon: <PetsIcon />,
  },
  {
    name: "Помощь приюту",
    url: "/help",
    icon: <VolunteerActivismIcon />,
  },
  {
    name: "Контакты",
    url: "/contacts",
    icon: <ContactPhoneIcon />,
  },
]

export default function Navbar() {
  const [windowWidth, setWidth] = useState(window.innerWidth)
  const [drawerState, setDrawerState] = useState(false)

  window.addEventListener("resize", () => setWidth(window.innerWidth))
  const handleCloseDrawer = () => {
    setDrawerState(false)
  }

  if (windowWidth > 680) {
    return (
      <>
        <CustomNav>
          <Link className="logo-link" to="/" aria-label="О нас">
            <img className="logo" src="/images/logos/logo100px.jpg" alt="Логотип" />
          </Link>
          {links.map((link) => {
            return (
              <Link key={link.url} to={link.url}>
                <Button startIcon={link.icon}>{link.name}</Button>
              </Link>
            )
          })}
          <ThemeSwitch />
        </CustomNav>
      </>
    )
  } else if (windowWidth > 610) {
    return (
      <>
        <CustomNav>
          <Link className="logo-link" to="/" aria-label="О нас">
            <img className="logo" src="/images/logos/logo100px.jpg" alt="Логотип" />
          </Link>
          {links.map((link) => {
            return (
              <Link key={link.url} to={link.url}>
                <Button>{link.name}</Button>
              </Link>
            )
          })}
          <ThemeSwitch />
        </CustomNav>
      </>
    )
  } else {
    return (
      <>
        <CustomNav>
          <Link className="logo-link" to="/" aria-label="О нас">
            <img className="logo" src="/images/logos/logo100px.jpg" alt="Логотип" />
          </Link>
          <Button startIcon={<MenuIcon />} onClick={() => setDrawerState(true)}>
            Меню
          </Button>
          <ThemeSwitch />
          <Drawer onClose={() => handleCloseDrawer()} anchor="right" open={drawerState}>
            <List>
              {links.map((link) => {
                return (
                  <ListItem key={link.url} disablePadding onClick={() => handleCloseDrawer()}>
                    <DrawerLink to={link.url}>
                      <ListItemButton>
                        <ListItemIcon>{link.icon}</ListItemIcon>
                        <ListItemText primary={link.name} />
                      </ListItemButton>
                    </DrawerLink>
                  </ListItem>
                )
              })}
            </List>
          </Drawer>
        </CustomNav>
      </>
    )
  }
}
