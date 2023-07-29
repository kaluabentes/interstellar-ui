import type { Meta, StoryObj } from "@storybook/react"

import ExperienceGrid from "./ExperienceGrid"
import experienceItems from "./experienceItems"

const meta: Meta<typeof ExperienceGrid> = {
  title: "components/ExperienceGrid",
  component: ExperienceGrid,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ExperienceGrid>

export const Default: Story = {
  render: () => (
    <ExperienceGrid title="Experiência" experienceItems={experienceItems} />
  ),
}
