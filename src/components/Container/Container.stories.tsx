import type { Meta, StoryObj } from "@storybook/react"

import Container from "./Container"
import Paragraph from "../Paragraph"

const meta: Meta<typeof Container> = {
  title: "components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  render: () => (
    <Container>
      <Paragraph>
        Deserunt esse cillum occaecat incididunt quis ipsum veniam eu cupidatat.
        Non adipisicing deserunt esse exercitation. Sit duis fugiat cupidatat
        occaecat labore esse eu aliquip nisi consequat exercitation dolore amet
        occaecat. Cupidatat occaecat dolor reprehenderit minim sit. Sit ut aute
        deserunt occaecat.
      </Paragraph>
    </Container>
  ),
}
