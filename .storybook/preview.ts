import type { Preview } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"

import "../src/theme/ThemeProvider/font"
import lightTheme from "../src/theme/lightTheme"
import darkTheme from "../src/theme/darkTheme"
import GlobalStyles from "../src/theme/GlobalStyles"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
}

export default preview
