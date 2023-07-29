"use client"

import { ReactNode } from "react"

import { Container, ContentItem } from "./Hero.styles"
import Avatar from "../Avatar"
import Button from "../Button"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

interface HeroProps {
  id?: string
  headline: string
  paragraph: string
  buttonText: string
  imageSrc: string
  imageAlt: string
  footerSlot?: ReactNode
  isReversed?: boolean
  headingLevel?: number
  onButtonClick?: () => void
}

const Hero = ({
  id,
  headline,
  paragraph,
  buttonText,
  imageSrc,
  imageAlt,
  footerSlot,
  isReversed = false,
  headingLevel = 1,
  onButtonClick,
}: HeroProps) => (
  <Container id={id} $isReversed={isReversed}>
    <ContentItem>
      <Heading level={headingLevel}>{headline}</Heading>
      <Paragraph variant="muted">{paragraph}</Paragraph>
      {onButtonClick && (
        <Button variant="primary" size="lg" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
      {footerSlot}
    </ContentItem>
    <Avatar src={imageSrc} alt={imageAlt} />
  </Container>
)

export default Hero
