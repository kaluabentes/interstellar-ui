import type { Meta, StoryObj } from "@storybook/react"
import { BiPlanet } from "react-icons/bi"

import FeatureCard from "./FeatureCard"

const meta: Meta<typeof FeatureCard> = {
  title: "components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FeatureCard>

export const Default: Story = {
  args: {
    icon: <BiPlanet />,
    title: "Multiplanetário",
    description:
      "Ad sunt commodo consectetur aliquip anim laboris pariatur irure minim ex labore fugiat.",
  },
}
