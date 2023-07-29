import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Paragraph from "./Paragraph"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const Themed = () => (
  <ThemeProvider theme={lightTheme}>
    <Paragraph>Action</Paragraph>
  </ThemeProvider>
)

describe("Paragraph", () => {
  it("renders without problems", () => {
    render(<Themed />)
    expect(screen.getByText("Action")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Themed />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
