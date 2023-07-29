"use client"

import { ReactNode } from "react"
import { BaseContainer } from "./Container.styles"

export interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl"
  children: ReactNode
}

const Container = ({ children, size = "md" }: ContainerProps) => (
  <BaseContainer $size={size}>{children}</BaseContainer>
)

export default Container
