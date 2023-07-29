import type { Meta, StoryObj } from "@storybook/react"

import Heading from "./Heading"
import Paragraph from "../Paragraph"

const meta: Meta<typeof Heading> = {
  title: "components/Heading",
  component: Heading,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  render: () => (
    <>
      <Heading level={1}>A Visual Type Scale</Heading>
      <Heading level={2}>A Visual Type Scale</Heading>
      <Heading level={3}>A Visual Type Scale</Heading>
      <Heading level={4}>A Visual Type Scale</Heading>
    </>
  ),
}

export const Document: Story = {
  render: () => (
    <>
      <Heading level={1}>A Visual Type Scale</Heading>
      <Paragraph>
        Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur veniam
        laborum. Qui exercitation exercitation voluptate tempor adipisicing
        officia cillum. Laborum ex labore eu consectetur laboris amet minim esse
        sunt eiusmod commodo mollit id. Qui sit nostrud magna enim sit dolor
        veniam quis voluptate in cillum aute Lorem. Cupidatat elit eiusmod ut
        et.
      </Paragraph>
      <Paragraph>
        Excepteur aliquip dolor sint magna. Excepteur est tempor incididunt
        eiusmod sint ipsum commodo aliqua dolore ad. Dolor irure adipisicing
        anim mollit cillum proident nulla. Labore laboris commodo aliquip non
        anim magna ipsum velit adipisicing ipsum. Et aute qui nulla tempor
        consequat.
      </Paragraph>
      <Heading level={2}>A Visual Type Scale</Heading>
      <Paragraph>
        Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur veniam
        laborum. Qui exercitation exercitation voluptate tempor adipisicing
        officia cillum. Laborum ex labore eu consectetur laboris amet minim esse
        sunt eiusmod commodo mollit id. Qui sit nostrud magna enim sit dolor
        veniam quis voluptate in cillum aute Lorem. Cupidatat elit eiusmod ut
        et.
      </Paragraph>
      <Heading level={3}>A Visual Type Scale</Heading>
      <Paragraph>
        Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur veniam
        laborum. Qui exercitation exercitation voluptate tempor adipisicing
        officia cillum. Laborum ex labore eu consectetur laboris amet minim esse
        sunt eiusmod commodo mollit id. Qui sit nostrud magna enim sit dolor
        veniam quis voluptate in cillum aute Lorem. Cupidatat elit eiusmod ut
        et.
      </Paragraph>
      <Heading level={4}>A Visual Type Scale</Heading>
      <Paragraph>
        Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur veniam
        laborum. Qui exercitation exercitation voluptate tempor adipisicing
        officia cillum. Laborum ex labore eu consectetur laboris amet minim esse
        sunt eiusmod commodo mollit id. Qui sit nostrud magna enim sit dolor
        veniam quis voluptate in cillum aute Lorem. Cupidatat elit eiusmod ut
        et.
      </Paragraph>
    </>
  ),
}
