import {
  Container,
  Description,
  Image,
  Metadata,
  TagBox,
  Title,
} from "./PostCard.styles"
import Paragraph from "../Paragraph"
import Tag from "../Tag"

interface TagProps {
  label: string
  path: string
}

interface PostCardProps {
  author: string
  createdAt: string
  title: string
  description: string
  tags: TagProps[]
  imageSrc: string
  imageAlt: string
  onTagClick: (tag: string) => void
}

const PostCard = ({
  author,
  createdAt,
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  onTagClick,
}: PostCardProps) => (
  <Container>
    <Image src={imageSrc} alt={imageAlt} />
    <Metadata>
      <Paragraph variant="muted">{author}</Paragraph>
      <span />
      <Paragraph variant="muted">{createdAt}</Paragraph>
    </Metadata>
    <Title>{title}</Title>
    <Description variant="muted">{description}</Description>
    <TagBox>
      {tags.map((tag) => (
        <Tag key={tag.label} onClick={() => onTagClick(tag.path)}>
          {tag.label}
        </Tag>
      ))}
    </TagBox>
  </Container>
)

export default PostCard
