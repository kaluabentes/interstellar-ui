import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import PostCard from "./PostCard"
import lightTheme from "../../theme/lightTheme"

expect.extend(toHaveNoViolations)

const ThemedPostCard = () => (
  <ThemeProvider theme={lightTheme}>
    <PostCard
      author="Kaluã Bentes"
      createdAt="17 Jan 2023"
      title="Labore proident anim ea deserunt laboris et labore."
      description="Magna consectetur nostrud fugiat magna. Id enim nulla do ad est veniam elit et amet ex anim tempor. Deserunt excepteur laboris Lorem sint ea eiusmod Lorem elit adipisicing in esse tempor labore."
      imageSrc="https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg"
      imageAlt="Magna reprehenderit amet et laborum minim magna ut irure magna deserunt cillum in culpa."
      tags={[
        {
          label: "Next.js",
          path: "/categories/next",
        },
        {
          label: "React",
          path: "/categories/react",
        },
        {
          label: "SAAS",
          path: "/categories/saas",
        },
      ]}
      onTagClick={() => ""}
    />
  </ThemeProvider>
)

describe("PostCard", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedPostCard />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedPostCard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
