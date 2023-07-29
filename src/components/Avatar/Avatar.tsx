import { Image } from "./Avatar.styles"

interface AvatarProps {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => <Image src={src} alt={alt} />

export default Avatar
