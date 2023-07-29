import type { Meta, StoryObj } from "@storybook/react"

import { projects } from "./contants"
import ProjectGrid from "./ProjectGrid"

const meta: Meta<typeof ProjectGrid> = {
  title: "components/ProjectGrid",
  component: ProjectGrid,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProjectGrid>

export const Default: Story = {
  render: () => <ProjectGrid title="Projetos" projects={projects} />,
}
