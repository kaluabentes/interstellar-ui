import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import Hero from "./Hero"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedHero = ({ onButtonClick = () => "something" }) => (
  <ThemeProvider theme={lightTheme}>
    <Hero
      headline="Qui ex mollit exercitation mollit mollit nostrud ut labore proident nisi id deserunt commodo anim."
      paragraph="Veniam sit tempor aute elit anim do ex. Enim est pariatur consequat qui officia culpa laboris ullamco. Occaecat ut commodo velit occaecat consequat elit."
      buttonText="Vamos conversar"
      imageSrc="https://avatars.githubusercontent.com/u/6353257?v=4"
      imageAlt="Kaluã Bentes Avatar"
      onButtonClick={onButtonClick}
    />
  </ThemeProvider>
)

describe("Hero", () => {
  it("renders without problems", () => {
    render(<ThemedHero />)

    const hero = screen.getByAltText("Kaluã Bentes Avatar")

    expect(hero).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedHero />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
