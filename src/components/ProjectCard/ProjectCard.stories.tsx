import type { Meta, StoryObj } from "@storybook/react"

import ProjectCard from "./ProjectCard"

const meta: Meta<typeof ProjectCard> = {
  title: "components/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  render: () => (
    <ProjectCard
      title="Foodtron"
      description="Quis ad ipsum et incididunt."
      imageSrc="https://static.vecteezy.com/system/resources/previews/000/457/141/original/landing-page-template-of-website-design-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg"
      imageAlt="Screenshot do Foodtron"
      tags={["React", "Next.js", "Multi-tenant"]}
    />
  ),
}
