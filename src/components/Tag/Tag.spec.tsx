import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Tag from "./Tag"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedTag = () => (
  <ThemeProvider theme={lightTheme}>
    <Tag>Accessories</Tag>
  </ThemeProvider>
)

describe("Tag", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedTag />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedTag />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
