import { css, RuleSet } from "styled-components"

const queryLg = (cssString: RuleSet<object>) => css`
  @media (min-width: 821px) {
    ${cssString}
  }
`

export default queryLg
