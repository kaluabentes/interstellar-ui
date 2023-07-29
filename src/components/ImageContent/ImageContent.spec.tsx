import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import ImageContent from "./ImageContent"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedImageContent = () => (
  <ThemeProvider theme={lightTheme}>
    <ImageContent
      title="Qui ex mollit exercitation mollit mollit nostrud ut labore proident nisi id deserunt commodo anim."
      content="Veniam sit tempor aute elit anim do ex. Enim est pariatur consequat qui officia culpa laboris ullamco. Occaecat ut commodo velit occaecat consequat elit."
      imageSrc="https://avatars.githubusercontent.com/u/6353257?v=4"
      imageAlt="Kaluã Bentes Avatar"
    />
  </ThemeProvider>
)

describe("ImageContent", () => {
  it("renders without problems", () => {
    render(<ThemedImageContent />)

    const ImageContent = screen.getByAltText("Kaluã Bentes Avatar")

    expect(ImageContent).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedImageContent />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
