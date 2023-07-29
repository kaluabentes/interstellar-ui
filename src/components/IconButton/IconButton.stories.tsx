import type { Meta, StoryObj } from "@storybook/react"

import { BiMenu } from "react-icons/bi"

import IconButton from "./IconButton"

const meta: Meta<typeof IconButton> = {
  title: "components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: <BiMenu />,
    label: "Menu",
  },
}
