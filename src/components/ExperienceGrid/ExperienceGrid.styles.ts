import styled from "styled-components"

import section from "../../mixins/section"
import pxToRem from "../../utils/pxToRem"

export const Container = styled.section`
  ${section}
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(48)};
`
