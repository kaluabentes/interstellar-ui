import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Tooltip from "./Tooltip"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedTooltip = () => (
  <ThemeProvider theme={lightTheme}>
    <Tooltip id="next" label="Tooltip">
      Clique for more info
    </Tooltip>
  </ThemeProvider>
)

describe("Tooltip", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedTooltip />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedTooltip />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
