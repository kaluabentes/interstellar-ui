import type { Meta, StoryObj } from "@storybook/react"

import ExperienceCard from "./ExperienceCard"
import techItems from "./techItems"

const meta: Meta<typeof ExperienceCard> = {
  title: "components/ExperienceCard",
  component: ExperienceCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ExperienceCard>

export const Default: Story = {
  render: () => (
    <ExperienceCard
      role="Frontend Developer"
      description="Exercitation exercitation cillum mollit ea ullamco ad qui. Enim duis laborum officia voluptate velit occaecat. Ipsum anim anim reprehenderit reprehenderit eiusmod mollit laboris minim commodo do culpa ex dolor excepteur. Commodo voluptate cupidatat reprehenderit culpa officia consectetur mollit reprehenderit elit proident veniam officia."
      period="02/2021 á 003/2022"
      company="Company X"
      city="Metrópolis"
      techs={techItems}
    />
  ),
}
