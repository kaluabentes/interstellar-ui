import type { Meta, StoryObj } from "@storybook/react"

import ImageContent from "./ImageContent"
import Button from "../Button"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

const meta: Meta<typeof ImageContent> = {
  title: "components/ImageContent",
  component: ImageContent,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ImageContent>

export const Default: Story = {
  args: {
    title: "Sobre",
    content: (
      <>
        <Heading level={3}>
          Melhorando o mundo uma linha de código por vez
        </Heading>
        <Paragraph>
          Com 10 anos de experiência na indústria de desenvolvimento de
          software, possuo um sólido conhecimento em tecnologias front-end,
          incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e
          Vue.js. Minha habilidade de traduzir requisitos de design em código
          limpo e eficiente é uma das minhas principais características, o que
          resulta em interfaces de usuário rápidas, responsivas e visualmente
          atraentes.
        </Paragraph>
        <Paragraph>
          <Button>Linkdin</Button>
        </Paragraph>
      </>
    ),
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80",
    imageAlt: "Kaluã Bentes Avatar",
  },
}
