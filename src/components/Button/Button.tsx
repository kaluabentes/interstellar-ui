import { ReactNode } from "react"

import { Container } from "./Button.styles"

export interface ButtonProps {
  children: ReactNode
  variant?: "default" | "primary"
  size?: "sm" | "md" | "lg"
  isBlock?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const Button = ({
  children,
  variant = "default",
  size = "md",
  isBlock = false,
  type = "button",
  onClick,
}: ButtonProps) => (
  <Container
    $variant={variant}
    $size={size}
    $isBlock={isBlock}
    onClick={onClick}
    type={type}
  >
    {children}
  </Container>
)

export default Button
