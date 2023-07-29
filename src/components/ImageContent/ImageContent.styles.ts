import styled, { css } from "styled-components"

import section from "../../mixins/section"
import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.section`
  ${section}
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(32)};

  ${queryLg(css`
    flex-direction: row;
    gap: ${pxToRem(64)};
  `)}
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: ${pxToRem(8)};

  ${queryLg(css`
    width: 50%;
  `)}
`

export const ContentSide = styled.div``
