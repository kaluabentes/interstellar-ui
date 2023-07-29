import { ReactNode } from "react"
import { Container } from "./Heading.styles"

const asHeading: { [key: number]: string } = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
}

interface HeadingProps {
  level?: number
  children: ReactNode
  align?: "left" | "center" | "right"
  className?: string
}

const Heading = ({
  level = 2,
  children,
  align = "left",
  className,
}: HeadingProps) => (
  <Container as={asHeading[level]} $align={align} className={className}>
    {children}
  </Container>
)

export default Heading
