import { ReactNode, useEffect, useState } from "react"
import { Container } from "./AppBar.styles"

interface AppBarProps {
  children: ReactNode
  isFixed?: boolean
}

const AppBar = ({ children, isFixed = false }: AppBarProps) => {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasShadow(true)
      } else {
        setHasShadow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container $hasShadow={hasShadow} $isFixed={isFixed}>
      {children}
    </Container>
  )
}

export default AppBar
