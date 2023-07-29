"use client"

import { useState } from "react"
import { Container, Grid, TagBox } from "./ProjectGrid.styles"
import Heading from "../Heading"
import ProjectCard, { ProjectCardProps } from "../ProjectCard"
import Tag from "../Tag"

export interface GridProject extends ProjectCardProps {
  path: string
}

interface ProjectGridProps {
  id?: string
  title: string
  projects: GridProject[]
  onCardClick?: (path: string) => void
}

const ProjectGrid = ({
  id,
  title,
  projects,
  onCardClick,
}: ProjectGridProps) => {
  const [activeTag, setActiveTag] = useState<string | undefined>()

  const renderProject = (project: GridProject) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      imageSrc={project.imageSrc}
      imageAlt={project.imageAlt}
      tags={project.tags}
      onClick={() => {
        if (onCardClick) {
          onCardClick(project.path)
        }
      }}
    />
  )

  return (
    <Container id={id}>
      <Heading level={2} align="center">
        {title}
      </Heading>
      <TagBox>
        {Array.from(new Set(projects.flatMap((project) => project.tags))).map(
          (tag) => (
            <Tag
              key={tag}
              onClick={() =>
                setActiveTag((prevTag) => (prevTag === tag ? undefined : tag))
              }
              isActive={activeTag === tag}
            >
              {tag}
            </Tag>
          )
        )}
      </TagBox>
      <Grid data-testid="grid">
        {activeTag
          ? projects
              .filter((project) => project.tags.includes(activeTag))
              .map(renderProject)
          : projects.map(renderProject)}
      </Grid>
    </Container>
  )
}

export default ProjectGrid
