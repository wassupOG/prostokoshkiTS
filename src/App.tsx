import { Route, Routes } from "react-router-dom"
import HowToHelp from "./routes/HowToHelp"
import SearchPage from "./routes/SearchPage"
import ErrorPage from "./ErrorPage"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Navbar from "./components/Navbar"
import { themeStore } from "./components/ThemeSwitch/ThemeSwitchStore"
import { lightTheme } from "./themes/lightTheme"
import { darkTheme } from "./themes/darkTheme"
import Social from "./routes/Social"
import AboutUs from "./routes/AboutUs"

export default function App() {
  const { currentTheme } = themeStore()

  return (
    <>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/help" element={<HowToHelp />} />
            <Route path="/social" element={<Social />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  )
}
