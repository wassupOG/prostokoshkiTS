import { create } from "zustand"

type Theme = "light" | "dark"

interface ThemeStore {
  currentTheme: Theme
  toggleTheme: () => void
}

export const themeStore = create<ThemeStore>((set) => ({
  currentTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  toggleTheme: () => {
    set((state) => ({
      currentTheme: state.currentTheme === "light" ? "dark" : "light",
    }))
  },
}))
