import type { Meta, StoryObj } from "@storybook/react"

import Avatar from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/6353257?v=4",
    alt: "Kaluã Bentes",
  },
}
