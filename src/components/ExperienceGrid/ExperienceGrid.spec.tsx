import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { SiHtml5 } from "react-icons/si"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import ExperienceGrid from "./ExperienceGrid"
import lightTheme from "../../theme/lightTheme"
import { ExperienceCardProps } from "../ExperienceCard"

expect.extend(toHaveNoViolations)

const experienceItem: ExperienceCardProps = {
  role: "Frontend Developer",
  company: "DBC Company",
  description:
    "Trabalhei para um dos clientes parceiros que possuia uma ferramenta interna.",
  period: "Jun/2022 - Mai/2023",
  city: "Remoto",
  techs: [
    {
      label: "HTML5",
      icon: <SiHtml5 aria-hidden />,
      name: "html",
    },
  ],
}

const ThemedExperienceGrid = () => (
  <ThemeProvider theme={lightTheme}>
    <ExperienceGrid title="Experiência" experienceItems={[experienceItem]} />
  </ThemeProvider>
)

describe("ExperienceGrid", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedExperienceGrid />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedExperienceGrid />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
