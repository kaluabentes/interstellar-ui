"use client"

import { KeyboardEvent, ReactNode, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { Container, Content, Trigger } from "./Tooltip.styles"

interface TooltipProps {
  id: string
  label: string
  children: ReactNode
}

const Tooltip = ({ id, label, children }: TooltipProps) => {
  const [isActive, setIsActive] = useState(false)
  const [uniqueId, setUniqueId] = useState<string | undefined>()

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsActive(false)
    }
  }

  useEffect(() => {
    setUniqueId(`${id}-${uuidv4().substring(0, 5)}`)
  }, [id])

  return (
    <Container role="tooltip">
      <Content $isActive={isActive} id={uniqueId}>
        {label}
      </Content>
      <Trigger
        onKeyDown={handleKeydown}
        onClick={() => setIsActive((prev) => !prev)}
        onBlur={() => setIsActive(false)}
        aria-labelledby={uniqueId}
      >
        {children}
      </Trigger>
    </Container>
  )
}

export default Tooltip
