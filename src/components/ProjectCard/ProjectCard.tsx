import {
  Article,
  Container,
  Content,
  Description,
  Image,
  Overlay,
  Title,
} from "./ProjectCard.styles"
import { TagBox } from "../PostCard/PostCard.styles"
import Tag from "../Tag"

export interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags: string[]
  onClick?: () => void
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  onClick,
}: ProjectCardProps) => (
  <Container onClick={onClick} type="button">
    <Article onClick={onClick}>
      <Image src={imageSrc} alt={imageAlt} />
      <Overlay />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TagBox>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagBox>
      </Content>
    </Article>
  </Container>
)

export default ProjectCard
