import type { Meta, StoryObj } from "@storybook/react"

import Paragraph from "./Paragraph"

const meta: Meta<typeof Paragraph> = {
  title: "components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  render: () => (
    <>
      <Paragraph>
        Labore exercitation anim do dolor amet id. Cillum ut non occaecat
        adipisicing in consectetur exercitation consectetur ullamco. Et sint
        Lorem eiusmod pariatur laborum ut eiusmod sunt adipisicing eiusmod.
        Dolor irure voluptate sunt irure id dolore anim id ipsum amet. Do
        officia voluptate occaecat culpa est. Aliqua veniam ad mollit anim
        aliquip ad nostrud.
      </Paragraph>
      <Paragraph>
        Eu eu cupidatat labore eiusmod voluptate enim cupidatat ipsum aliqua.
        Qui est enim Lorem amet. Laboris consequat consequat labore incididunt
        deserunt.
      </Paragraph>
    </>
  ),
}
