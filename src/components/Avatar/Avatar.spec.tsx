import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Avatar from "./Avatar"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const Themed = () => (
  <ThemeProvider theme={lightTheme}>
    <Avatar src="." alt="image" />
  </ThemeProvider>
)

describe("Avatar", () => {
  it("renders without problems", () => {
    render(<Themed />)
    expect(screen.getByAltText("image")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Themed />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
