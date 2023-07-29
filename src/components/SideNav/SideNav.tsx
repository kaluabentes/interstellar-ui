import Link from "next/link"
import { BiX } from "react-icons/bi"

import {
  Backdrop,
  Container,
  Header,
  List,
  ListItem,
  Nav,
  Title,
} from "./SideNav.styles"
import IconButton from "../IconButton/IconButton"

interface SideNavProps {
  menuItems: {
    label: string
    path: string
  }[]
  isOpen?: boolean
  onClose?: () => void
}

const SideNav = ({ menuItems = [], isOpen, onClose }: SideNavProps) => {
  return (
    <Container>
      <Nav $isOpen={isOpen}>
        <Header>
          <Title>Navegação</Title>
          <IconButton onClick={onClose} icon={<BiX />} label="Fechar" />
        </Header>
        <List>
          {menuItems.map((menuItem) => (
            <ListItem key={menuItem.path}>
              <Link href={menuItem.path}>{menuItem.label}</Link>
            </ListItem>
          ))}
        </List>
      </Nav>
      <Backdrop aria-label="Overlay" $isOpen={isOpen} onClick={onClose} />
    </Container>
  )
}

export default SideNav
