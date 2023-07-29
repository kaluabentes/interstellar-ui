"use client"

import { ReactNode } from "react"

import BaseThemeProvider from "./BaseThemeProvider"
import { ThemeContextProvider } from "./ThemeContext"

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ThemeContextProvider>
    <BaseThemeProvider>{children}</BaseThemeProvider>
  </ThemeContextProvider>
)

export default ThemeProvider
