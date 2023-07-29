import type { Meta, StoryObj } from "@storybook/react"

import TechGrid from "./TechGrid"
import techItems from "../ExperienceCard/techItems"

const meta: Meta<typeof TechGrid> = {
  title: "components/TechGrid",
  component: TechGrid,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TechGrid>

export const Default: Story = {
  render: () => <TechGrid title="Tecnologias" items={techItems} />,
}
