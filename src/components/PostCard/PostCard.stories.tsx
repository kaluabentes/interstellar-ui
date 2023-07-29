import type { Meta, StoryObj } from "@storybook/react"

import PostCard from "./PostCard"

const meta: Meta<typeof PostCard> = {
  title: "components/PostCard",
  component: PostCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof PostCard>

export const Default: Story = {
  render: () => (
    <PostCard
      imageSrc="https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg"
      imageAlt="Magna reprehenderit amet et laborum minim magna ut irure magna deserunt cillum in culpa."
      author="Kaluã Bentes"
      createdAt="17 Jan 2023"
      title="Labore proident anim ea deserunt laboris et labore."
      description="Magna consectetur nostrud fugiat magna. Id enim nulla do ad est veniam elit et amet ex anim tempor. Deserunt excepteur laboris Lorem sint ea eiusmod Lorem elit adipisicing in esse tempor labore."
      tags={[
        {
          label: "Next.js",
          path: "/categories/next",
        },
        {
          label: "React",
          path: "/categories/react",
        },
        {
          label: "SAAS",
          path: "/categories/saas",
        },
      ]}
      onTagClick={() => ""}
    />
  ),
}
