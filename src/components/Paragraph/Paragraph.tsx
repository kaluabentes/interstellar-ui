import { ReactNode } from "react"
import { Container } from "./Paragraph.styles"

export interface ParagraphProps {
  children: ReactNode
  variant?: "default" | "muted"
  isBold?: boolean
  align?: "left" | "center" | "right"
  className?: string
}

const Paragraph = ({
  children,
  variant = "default",
  isBold = false,
  align = "left",
  className,
}: ParagraphProps) => (
  <Container
    className={className}
    $variant={variant}
    $isBold={isBold}
    $align={align}
  >
    {children}
  </Container>
)

export default Paragraph
