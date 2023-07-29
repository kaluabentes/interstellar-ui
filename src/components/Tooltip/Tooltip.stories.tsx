import type { Meta, StoryObj } from "@storybook/react"

import Tooltip from "./Tooltip"
import Paragraph from "../Paragraph"

const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip id="next" label="Tooltip">
      <Paragraph>Clique me for more info</Paragraph>
    </Tooltip>
  ),
}
