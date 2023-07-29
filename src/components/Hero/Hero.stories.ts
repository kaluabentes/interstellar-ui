import type { Meta, StoryObj } from "@storybook/react"

import Hero from "./Hero"

const meta: Meta<typeof Hero> = {
  title: "components/Hero",
  component: Hero,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    headline: "Kaluã Bentes",
    paragraph:
      "Desenvolvedor frontend há 10 anos reunindo experiência em diversas tecnologias e frameworks. Minha missão é entregar telas de alta fidelidade, eficazes, acessíveis, perfomáticas e com um código escalável.",
    buttonText: "Vamos conversar",
    imageSrc: "https://avatars.githubusercontent.com/u/6353257?v=4",
    imageAlt: "Kaluã Bentes Avatar",
  },
}

export const Reversed: Story = {
  args: {
    headline: "Kaluã Bentes",
    paragraph:
      "Desenvolvedor frontend há 10 anos reunindo experiência em diversas tecnologias e frameworks. Minha missão é entregar telas de alta fidelidade, eficazes, acessíveis, perfomáticas e com um código escalável.",
    buttonText: "Vamos conversar",
    imageSrc: "https://avatars.githubusercontent.com/u/6353257?v=4",
    imageAlt: "Kaluã Bentes Avatar",
    isReversed: true,
  },
}
