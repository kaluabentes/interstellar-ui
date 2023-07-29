import styled, { css } from "styled-components"

import section from "../../mixins/section"
import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.section`
  ${section}

  & h2 {
    margin-bottom: ${pxToRem(16)};
  }

  & > p:first-of-type {
    margin-bottom: ${pxToRem(32)};
    font-weight: 500;
  }
`

export const Grid = styled.div`
  display: grid;
  gap: ${pxToRem(32)};

  ${queryLg(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`

export const TagBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${pxToRem(32)};
  gap: ${pxToRem(8)};
`
