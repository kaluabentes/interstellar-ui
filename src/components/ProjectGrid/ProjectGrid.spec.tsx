import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import { projects } from "./contants"
import ProjectGrid from "./ProjectGrid"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedProjectGrid = ({ onCardClick = () => "" }) => (
  <ThemeProvider theme={lightTheme}>
    <ProjectGrid
      title="Features"
      projects={projects}
      onCardClick={onCardClick}
    />
  </ThemeProvider>
)

describe("ProjectGrid", () => {
  it("renders without problems", () => {
    render(<ThemedProjectGrid />)

    expect(screen.getByText("Features")).toBeInTheDocument()
  })

  it("interacts without problems", async () => {
    const handleCardClick = jest.fn()

    render(<ThemedProjectGrid onCardClick={handleCardClick} />)

    // Filtro por tags
    const buttons = screen.getAllByText("React")
    fireEvent.click(buttons[0])

    await waitFor(() => {
      expect(screen.queryByText("Next.js Project")).toBeNull()
      expect(screen.getByText("React Project")).toBeInTheDocument()
    })

    // Alternate click
    fireEvent.click(buttons[0])

    await waitFor(() => {
      expect(screen.queryByText("Next.js Project")).toBeInTheDocument()
      expect(screen.getByText("React Project")).toBeInTheDocument()
    })

    // Card click
    const gridElement = screen.getByTestId("grid")
    const button = gridElement.querySelector("button")
    fireEvent.click(button as Element)

    await waitFor(() => {
      expect(handleCardClick).toBeCalledWith("/next")
    })
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedProjectGrid />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
