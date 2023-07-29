import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { BiMenu } from "react-icons/bi"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import IconButton from "./IconButton"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedIconButton = ({ onClick = () => "something" }) => (
  <ThemeProvider theme={lightTheme}>
    <IconButton onClick={onClick} label="Menu" icon={<BiMenu />} />
  </ThemeProvider>
)

describe("IconButton", () => {
  it("renders without problems", () => {
    render(<ThemedIconButton />)

    const iconButton = screen.getByRole("button")

    expect(iconButton).toBeInTheDocument()
  })

  it("interacts without problems", async () => {
    const handleClick = jest.fn()

    render(<ThemedIconButton onClick={handleClick} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    await waitFor(() => expect(handleClick).toHaveBeenCalled())
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedIconButton />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
