"use client"

import { Container, Grid } from "./ExperienceGrid.styles"
import createKey from "../../utils/createKey"
import ExperienceCard, { ExperienceCardProps } from "../ExperienceCard"
import Heading from "../Heading"

interface ExperienceGridProps {
  id?: string
  title: string
  experienceItems: ExperienceCardProps[]
}

const ExperienceGrid = ({
  id,
  title,
  experienceItems,
}: ExperienceGridProps) => (
  <Container id={id}>
    <Heading align="center">{title}</Heading>
    <Grid>
      {experienceItems.map((experienceItem, index) => (
        <ExperienceCard
          key={createKey(index)}
          role={experienceItem.role}
          description={experienceItem.description}
          period={experienceItem.period}
          company={experienceItem.company}
          city={experienceItem.city}
          techs={experienceItem.techs}
        />
      ))}
    </Grid>
  </Container>
)

export default ExperienceGrid
