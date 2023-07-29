import { css } from "styled-components"
import pxToRem from "../utils/pxToRem"
import queryLg from "../utils/queryLg"

const section = css`
  padding: ${pxToRem(42)} 0;

  ${queryLg(css`
    padding: ${pxToRem(84)} 0;
  `)}
`

export default section
