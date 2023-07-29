import { ReactNode } from "react"

import { Icon } from "./TechIcon.styles"
import Tooltip from "../Tooltip"

export interface TechIconProps {
  icon: ReactNode
  label: string
  name:
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "react"
    | "redux"
    | "next"
    | "styled-components"
    | "vue"
    | "jest"
    | "testing-library"
    | "cypress"
    | "jamstack"
    | "pwa"
    | "nodejs"
    | "graphql"
    | "prisma"
    | "postgres"
    | "strapi"
    | "vercel"
    | "chatgpt"
    | "storybook"
    | "eslint"
    | "shopify"
    | "react-native"
    | "angular"
    | "php"
    | "mysql"
    | "laravel"
    | "gulp"
    | "wordpress"
    | "sass"
    | "cssmodules"
    | "github"
    | "git"
    | "django"
    | "python"
    | "wagtail"
    | "nestjs"
    | "context-api"
    | "react-hooks"
    | "design-system"
}

const TechIcon = ({ icon, name, label }: TechIconProps) => (
  <Tooltip id={name} label={label}>
    <Icon $name={name}>{icon}</Icon>
  </Tooltip>
)

export default TechIcon
