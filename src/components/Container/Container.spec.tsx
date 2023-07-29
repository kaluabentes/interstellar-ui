import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Container from "./Container"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedContainer = () => (
  <ThemeProvider theme={lightTheme}>
    <Container>Action</Container>
  </ThemeProvider>
)

describe("Container", () => {
  it("renders without problems", () => {
    render(<ThemedContainer />)

    expect(screen.getByText("Action")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedContainer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
