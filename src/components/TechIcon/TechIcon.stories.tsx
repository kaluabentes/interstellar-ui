import type { Meta, StoryObj } from "@storybook/react"
import { SiNextdotjs } from "react-icons/si"

import TechIcon from "./TechIcon"

const meta: Meta<typeof TechIcon> = {
  title: "components/TechIcon",
  component: TechIcon,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TechIcon>

export const Default: Story = {
  args: {
    icon: <SiNextdotjs />,
    name: "next",
    label: "Next.js",
  },
}
