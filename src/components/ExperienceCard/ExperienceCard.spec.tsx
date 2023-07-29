import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { SiHtml5 } from "react-icons/si"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import ExperienceCard from "./ExperienceCard"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedExperienceCard = () => (
  <ThemeProvider theme={lightTheme}>
    <ExperienceCard
      role="Frontend Developer"
      description="Exercitation exercitation cillum mollit ea ullamco ad qui. Enim duis laborum officia voluptate velit occaecat. Ipsum anim anim reprehenderit reprehenderit eiusmod mollit laboris minim commodo do culpa ex dolor excepteur. Commodo voluptate cupidatat reprehenderit culpa officia consectetur mollit reprehenderit elit proident veniam officia."
      period="02/2021 á 003/2022"
      company="Company X"
      city="Metrópolis"
      techs={[
        {
          label: "HTML5",
          icon: <SiHtml5 aria-hidden />,
          name: "html",
        },
      ]}
    />
  </ThemeProvider>
)

describe("ExperienceCard", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedExperienceCard />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedExperienceCard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
