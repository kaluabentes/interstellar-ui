"use client"

import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import useTheme from "./useTheme"
import GlobalStyles from "../GlobalStyles"
import "./font"

interface BaseThemeProviderProps {
  children: ReactNode
}

const BaseThemeProvider = ({ children }: BaseThemeProviderProps) => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default BaseThemeProvider
