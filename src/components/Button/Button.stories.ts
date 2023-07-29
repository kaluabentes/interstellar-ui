import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: "default",
    children: "Action",
  },
}

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Action",
  },
}

export const Small: Story = {
  args: {
    variant: "primary",
    children: "Action",
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    variant: "primary",
    children: "Action",
    size: "md",
  },
}

export const Large: Story = {
  args: {
    variant: "primary",
    children: "Action",
    size: "lg",
  },
}

export const Block: Story = {
  args: {
    variant: "primary",
    children: "Action",
    size: "lg",
    isBlock: true,
  },
}
