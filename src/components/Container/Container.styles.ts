import styled, { css } from "styled-components"

import { ContainerProps } from "./Container"
import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const BaseContainer = styled.div<{ $size?: ContainerProps["size"] }>`
  margin: 0 auto;
  padding: 0 ${pxToRem(16)};
  width: 100%;

  ${queryLg(css`
    padding: 0 ${pxToRem(32)};
  `)}

  ${(props) =>
    props.$size === "sm" &&
    css`
      max-width: ${pxToRem(640)};
    `}

  ${(props) =>
    props.$size === "md" &&
    css`
      max-width: ${pxToRem(768)};
    `}

  ${(props) =>
    props.$size === "lg" &&
    css`
      max-width: ${pxToRem(1124)};
    `}

  ${(props) =>
    props.$size === "xl" &&
    css`
      max-width: ${pxToRem(1280)};
    `}
`
