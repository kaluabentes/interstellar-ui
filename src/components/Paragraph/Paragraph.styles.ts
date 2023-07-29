import styled, { css } from "styled-components"

import { ParagraphProps } from "./Paragraph"
import pxToRem from "../../utils/pxToRem"

export const Container = styled.p<{
  $variant?: ParagraphProps["variant"]
  $isBold?: boolean
  $align?: "left" | "center" | "right"
}>`
  margin: 0 0 ${pxToRem(32)} 0;
  line-height: 1.75;
  text-align: ${(props) => props.$align};

  &:last-of-type {
    margin-bottom: 0;
  }

  ${(props) =>
    props.$variant === "default" &&
    css`
      color: inherit;
    `}

  ${(props) =>
    props.$variant === "muted" &&
    css`
      color: ${(props) => props.theme.paragraph.muted.color};
    `}

  ${(props) =>
    props.$isBold &&
    css`
      font-weight: 600;
      font-size: 22px;
    `}
`
