import Tooltip from "@mui/material/Tooltip"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { IconButton } from "@mui/material"
import { themeStore } from "../stores/stylesStore"

export default function ThemeSwitch() {
  const { currentTheme, toggleTheme } = themeStore()
  return (
    <>
      <Tooltip title={currentTheme === "light" ? "Включить темную тему" : "Включить светлую тему"} onClick={toggleTheme}>
        <IconButton>{currentTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
      </Tooltip>
    </>
  )
}
