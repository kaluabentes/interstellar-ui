import base from "./base"

import palette from "./palette"

const lightTheme = {
  ...base,
  name: "light",
  appBar: {
    backgroundColor: "white",
  },
  body: {
    color: palette.secondary[900],
    backgroundColor: "white",
  },
  button: {
    primary: {
      background: palette.primary[500],
      backgroundHover: palette.primary[700],
      backgroundActive: palette.primary[900],
      borderColor: palette.primary[500],
      color: "white",
    },
    default: {
      background: "white",
      backgroundHover: palette.secondary[50],
      backgroundActive: palette.secondary[200],
      borderColor: palette.secondary[300],
      color: palette.secondary[800],
    },
  },
  paragraph: {
    muted: {
      color: palette.secondary[700],
    },
  },
  separator: {
    borderColor: palette.secondary[100],
  },
  iconButton: {
    color: palette.secondary[600],
    colorHover: palette.secondary[900],
  },
  sideNav: {
    backgroundColor: "white",
    borderColor: palette.secondary[100],
  },
  tag: {
    default: {
      background: "white",
      backgroundHover: palette.secondary[50],
      backgroundActive: palette.secondary[200],
      borderColor: palette.secondary[300],
      color: palette.secondary[800],
    },
  },
  tooltip: {
    background: palette.secondary[800],
    color: "white",
  },
}

export default lightTheme
