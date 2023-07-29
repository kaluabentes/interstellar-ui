import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Heading from "./Heading"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const Themed = () => (
  <ThemeProvider theme={lightTheme}>
    <Heading>Action</Heading>
  </ThemeProvider>
)

describe("Heading", () => {
  it("renders without problems", () => {
    render(<Themed />)

    const heading = screen.getByRole("heading")

    expect(heading).toHaveTextContent("Action")
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Themed />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
