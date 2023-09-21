import Tooltip from "@mui/material/Tooltip"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { IconButton } from "@mui/material"
import { themeStore } from "./ThemeSwitchStore"

export default function ThemeSwitch() {
  const { currentTheme, toggleTheme } = themeStore()
  return (
    <>
      <Tooltip title={currentTheme === "light" ? "Switch to dark mode" : "Switch to light mode"} onClick={toggleTheme}>
        <IconButton>{currentTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
      </Tooltip>
    </>
  )
}
