import { useContext } from "react"

import { ThemeContext, ThemeContextValue } from "./ThemeContext"

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextValue

  if (typeof theme === "undefined") {
    throw new Error("Wrap the application with ThemeContextProvider")
  }

  return {
    theme,
    toggleTheme,
  }
}

export default useTheme
