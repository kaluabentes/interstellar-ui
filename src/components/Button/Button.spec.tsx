import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Button from "./Button"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedButton = ({ onClick = () => "something" }) => (
  <ThemeProvider theme={lightTheme}>
    <Button onClick={onClick}>Action</Button>
  </ThemeProvider>
)

describe("Button", () => {
  it("renders without problems", () => {
    render(<ThemedButton />)

    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Action")
  })

  it("interacts without problems", async () => {
    const handleClick = jest.fn()

    render(<ThemedButton onClick={handleClick} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    await waitFor(() => expect(handleClick).toHaveBeenCalled())
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedButton />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
