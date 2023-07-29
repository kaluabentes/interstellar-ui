import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import ProjectCard from "./ProjectCard"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedProjectCard = ({ onClick = () => "" }) => (
  <ThemeProvider theme={lightTheme}>
    <ProjectCard
      title="Foodtron"
      description="Quis ad ipsum et incididunt."
      imageSrc=""
      imageAlt=""
      tags={["React", "Next.js"]}
      onClick={onClick}
    />
  </ThemeProvider>
)

describe("ProjectCard", () => {
  it("renders without problems", () => {
    render(<ThemedProjectCard />)

    expect(screen.getByText("Foodtron")).toBeInTheDocument()
    expect(screen.getByText("Quis ad ipsum et incididunt.")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Next.js")).toBeInTheDocument()
  })

  it("interacts without problems", async () => {
    const handleClick = jest.fn()

    render(<ThemedProjectCard onClick={handleClick} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    await waitFor(() => expect(handleClick).toHaveBeenCalled())
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedProjectCard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
