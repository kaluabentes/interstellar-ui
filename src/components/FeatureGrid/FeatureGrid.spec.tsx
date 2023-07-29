import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { BiUser } from "react-icons/bi"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import FeatureGrid from "./FeatureGrid"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedFeatureGrid = () => (
  <ThemeProvider theme={lightTheme}>
    <FeatureGrid
      title="Features"
      paragraph="Consequat tempor ullamco proident cillum deserunt aliquip."
      items={[
        {
          title: "Feature",
          description:
            "Consequat tempor ullamco proident cillum deserunt aliquip.",
          icon: <BiUser />,
        },
      ]}
    />
  </ThemeProvider>
)

describe("FeatureGrid", () => {
  it("renders without problems", () => {
    render(<ThemedFeatureGrid />)

    expect(screen.getByText("Features")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedFeatureGrid />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
