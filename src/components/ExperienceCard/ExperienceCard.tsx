import {
  City,
  Company,
  Container,
  Content,
  Description,
  Details,
  Period,
  Role,
} from "./ExperienceCard.styles"
import Heading from "../Heading"
import { Grid } from "../TechGrid/TechGrid.styles"
import TechIcon, { TechIconProps } from "../TechIcon"

export interface ExperienceCardProps {
  role: string
  description: string
  period: string
  company: string
  city: string
  techs: TechIconProps[]
}

const ExperienceCard = ({
  role,
  description,
  period,
  company,
  city,
  techs,
}: ExperienceCardProps) => (
  <Container>
    <Details>
      <Period>{period}</Period>
      <Company variant="muted">{company}</Company>
      <City variant="muted">{city}</City>
    </Details>
    <Content>
      <Role level={3}>{role}</Role>
      <Description variant="muted">{description}</Description>
      <Heading level={4}>Competências</Heading>
      <Grid>
        {techs.map((tech) => (
          <TechIcon
            key={tech.label}
            label={tech.label}
            icon={tech.icon}
            name={tech.name}
          />
        ))}
      </Grid>
    </Content>
  </Container>
)

export default ExperienceCard
