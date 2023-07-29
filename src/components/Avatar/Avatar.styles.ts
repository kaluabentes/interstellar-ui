import styled, { css } from "styled-components"

import queryLg from "../../utils/queryLg"

export const Image = styled.img`
  min-width: 200px;
  min-height: 200px;
  object-fit: cover;
  border-radius: 50%;

  ${queryLg(css`
    min-width: 300px;
    min-height: 300px;
  `)}
`
