"use client"

import { ReactNode } from "react"
import { Container } from "./IconButton.styles"

interface IconButtonProps {
  icon: ReactNode
  label: string
  onClick?: () => void
  className?: string
}

const IconButton = ({ className, icon, label, onClick }: IconButtonProps) => (
  <Container className={className} onClick={onClick} aria-label={label}>
    {icon}
  </Container>
)

export default IconButton
