import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import SideNav from "./SideNav"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const Themed = () => (
  <ThemeProvider theme={lightTheme}>
    <SideNav
      menuItems={[
        {
          label: "Home",
          path: "/",
        },
      ]}
    />
  </ThemeProvider>
)

jest.mock("next/link", () => {
  return ({ children }: { children: ReactNode }) => {
    return children
  }
})

describe("SideNav", () => {
  it("renders without problems", () => {
    render(<Themed />)

    const link = screen.getAllByRole("listitem")

    expect(link[0].innerHTML).toBe("Home")
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Themed />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
