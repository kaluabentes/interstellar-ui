import type { Meta, StoryObj } from "@storybook/react"

import SideNav from "./SideNav"

const meta: Meta<typeof SideNav> = {
  title: "components/SideNav",
  component: SideNav,
  tags: ["autodocs"],
}

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projetos",
    path: "/projects",
  },
  {
    label: "Posts",
    path: "/posts",
  },
]

export default meta
type Story = StoryObj<typeof SideNav>

export const Default: Story = {
  args: {
    menuItems,
  },
}
