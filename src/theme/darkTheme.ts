import base from "./base"

import palette from "./palette"

const darkTheme = {
  ...base,
  name: "dark",
  appBar: {
    backgroundColor: palette.secondary[900],
  },
  body: {
    color: "white",
    backgroundColor: palette.secondary[900],
  },
  button: {
    primary: {
      background: palette.primary[500],
      backgroundHover: palette.primary[400],
      backgroundActive: palette.primary[700],
      borderColor: palette.primary[500],
      color: "white",
    },
    default: {
      background: palette.secondary[800],
      backgroundHover: palette.secondary[700],
      backgroundActive: palette.secondary[900],
      borderColor: palette.secondary[500],
      color: "white",
    },
  },
  paragraph: {
    muted: {
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  iconButton: {
    color: "rgba(255, 255, 255, 0.7)",
    colorHover: "rgba(255, 255, 255, 0.8)",
  },
  sideNav: {
    backgroundColor: palette.secondary[800],
    borderColor: palette.secondary[700],
  },
  separator: {
    borderColor: palette.secondary[50],
  },
  tag: {
    default: {
      background: palette.secondary[800],
      backgroundHover: palette.secondary[700],
      backgroundActive: palette.secondary[900],
      borderColor: palette.secondary[500],
      color: "white",
    },
  },
  tooltip: {
    background: "white",
    color: palette.secondary[800],
  },
}

export default darkTheme
