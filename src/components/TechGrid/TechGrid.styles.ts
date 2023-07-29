import styled from "styled-components"

import section from "../../mixins/section"
import pxToRem from "../../utils/pxToRem"

export const Container = styled.section`
  ${section}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-auto-rows: ${pxToRem(60)};
  grid-gap: ${pxToRem(10)};
`
