import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { SiHtml5 } from "react-icons/si"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import TechGrid from "./TechGrid"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedTechGrid = () => (
  <ThemeProvider theme={lightTheme}>
    <TechGrid
      title="Features"
      items={[
        {
          label: "HTML5",
          icon: <SiHtml5 aria-hidden />,
          name: "html",
        },
      ]}
    />
  </ThemeProvider>
)

describe("TechGrid", () => {
  it("renders without problems", () => {
    render(<ThemedTechGrid />)

    expect(screen.getByText("Features")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedTechGrid />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
