import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { BiUser } from "react-icons/bi"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import FeatureCard from "./FeatureCard"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedFeatureCard = () => (
  <ThemeProvider theme={lightTheme}>
    <FeatureCard
      icon={<BiUser />}
      title="Feature"
      description="Consequat tempor ullamco proident cillum deserunt aliquip."
    />
  </ThemeProvider>
)

describe("FeatureCard", () => {
  it("renders without problems", () => {
    render(<ThemedFeatureCard />)

    expect(screen.getByText("Feature")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedFeatureCard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
