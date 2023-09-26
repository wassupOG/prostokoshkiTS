import { Link } from "react-router-dom"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import PublicIcon from "@mui/icons-material/Public"
import { IconButton } from "@mui/material"

export default function Navbar() {
  return (
    <>
      <nav>
        <Link className="logo-link" to="/" aria-label="Главная страица">
          <img className="logo" src="/images/logos/logo100px.jpg" alt="Логотип" />
        </Link>
        <ThemeSwitch />
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
      </nav>
    </>
  )
}
