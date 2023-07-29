import type { Meta, StoryObj } from "@storybook/react"
import {
  BiAtom,
  BiCodeBlock,
  BiCodeCurly,
  BiMobileAlt,
  BiPlanet,
} from "react-icons/bi"
import { SiJamstack } from "react-icons/si"

import FeatureGrid from "./FeatureGrid"

const meta: Meta<typeof FeatureGrid> = {
  title: "components/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FeatureGrid>

export const Default: Story = {
  render: () => (
    <FeatureGrid
      title="Diferenciais"
      paragraph="Algumas das habilidades que venho acumulando com o passar dos anos."
      items={[
        {
          title: "Ownership",
          description:
            "O sentimento base para o sucesso de qualquer projeto é o sentimento de dono.",
          icon: <BiPlanet />,
        },
        {
          title: "Clean Code",
          description:
            "Procuro estar sempre estudando novos padrões e boas práticas de codificação.",
          icon: <BiCodeBlock />,
        },
        {
          title: "PWA",
          description:
            "Consequat tempor ullamco proident cillum deserunt aliquip.",
          icon: <BiMobileAlt />,
        },
        {
          title: "Jamstack",
          description:
            "Utilize uma arquitetura moderna que oferece máxima performance, mais segurança e baixo custo de infraestrutura.",
          icon: <SiJamstack />,
        },
        {
          title: "Design com código",
          description:
            "Crie um MVP fullstack aplicando todos os conhecimentos de UI/UX que venho absorvendo.",
          icon: <BiCodeCurly />,
        },
        {
          title: "Design Systems",
          description:
            "Crie um design system que reflita a identidade de sua marca.",
          icon: <BiAtom />,
        },
      ]}
    />
  ),
}
