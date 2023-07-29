import { ReactNode } from "react"
import { Container } from "./Tag.styles"

interface TagProps {
  children: ReactNode
  isActive?: boolean
  onClick?: () => void
}

const Tag = ({ children, onClick, isActive }: TagProps) => (
  <Container
    as={!onClick ? "span" : undefined}
    onClick={onClick}
    $isActive={isActive}
  >
    {children}
  </Container>
)

export default Tag
