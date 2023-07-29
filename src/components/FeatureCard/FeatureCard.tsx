import { ReactNode } from "react"

import { Container, Icon } from "./FeatureCard.styles"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <Container>
    <Icon>{icon}</Icon>
    <Heading level={3} align="center">
      {title}
    </Heading>
    <Paragraph variant="muted" align="center">
      {description}
    </Paragraph>
  </Container>
)

export default FeatureCard
