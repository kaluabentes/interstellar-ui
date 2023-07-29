import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

export const Container = styled.article`
  & * {
    margin: 0;
  }

  & h3,
  h4,
  p {
    font-size: ${pxToRem(16)};
    line-height: 1.75;
  }

  & h4 {
    margin-bottom: ${pxToRem(10)};
  }

  ${queryLg(css`
    display: flex;
    gap: ${pxToRem(48)};
  `)}
`

export const Details = styled.div`
  margin-bottom: ${pxToRem(16)};

  ${queryLg(css`
    width: 100%;
    max-width: 20%;
  `)}
`

export const Content = styled.div`
  ${queryLg(css`
    width: 100%;
    max-width: 80%;
  `)}
`

export const Period = styled(Paragraph)`
  font-weight: 500;
  font-size: ${pxToRem(18)} !important;
`

export const Company = styled(Paragraph)``

export const City = styled(Paragraph)``

export const Role = styled(Heading)`
  font-weight: 600;
  font-size: ${pxToRem(18)} !important;

  ${queryLg(css`
    margin-bottom: 0;
  `)}
`

export const Description = styled(Paragraph)`
  margin-bottom: ${pxToRem(16)} !important;
`

export const TechBox = styled.div``
