import { Link } from "react-router-dom"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import PublicIcon from "@mui/icons-material/Public"
import { IconButton } from "@mui/material"
import PetsIcon from "@mui/icons-material/Pets"
import HomeIcon from "@mui/icons-material/Home"
import { CustomNav } from "../themes/styledComponents"

export default function Navbar() {
  return (
    <>
      <CustomNav>
        <Link className="logo-link" to="/" aria-label="О нас">
          <img className="logo" src="/images/logos/logo100px.jpg" alt="Логотип" />
        </Link>
        <Link to="/" aria-label="О нас">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/search" aria-label="Поиск кошек">
          <IconButton>
            <PetsIcon />
          </IconButton>
        </Link>
        <Link to="/help" aria-label="Помощь приюту">
          <IconButton>
            <VolunteerActivismIcon />
          </IconButton>
        </Link>
        <Link to="/social" aria-label="Наши социальные сети">
          <IconButton>
            <PublicIcon />
          </IconButton>
        </Link>
        <ThemeSwitch />
      </CustomNav>
    </>
  )
}
