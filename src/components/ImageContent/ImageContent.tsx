"use client"

import { ReactNode } from "react"

import {
  Container,
  ContentBox,
  ContentSide,
  Image,
} from "./ImageContent.styles"
import Heading from "../Heading"

interface ImageContentProps {
  id?: string
  title: string
  imageSrc: string
  imageAlt: string
  content: ReactNode
}

const ImageContent = ({
  id,
  title,
  imageSrc,
  imageAlt,
  content,
}: ImageContentProps) => (
  <Container id={id}>
    <Heading level={2}>{title}</Heading>
    <ContentBox>
      <Image src={imageSrc} alt={imageAlt} />
      <ContentSide>{content}</ContentSide>
    </ContentBox>
  </Container>
)

export default ImageContent
