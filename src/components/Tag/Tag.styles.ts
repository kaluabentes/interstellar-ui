import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.button<{ $isActive?: boolean }>`
  display: inline-block;
  background: ${(props) => props.theme.tag.default.background};
  border: 1px solid ${(props) => props.theme.tag.default.borderColor};
  color: ${(props) => props.theme.tag.default.color};
  border-radius: ${pxToRem(6)};
  padding: ${pxToRem(4)};
  font-size: ${pxToRem(12)};
  font-weight: 600;

  ${(props) =>
    Boolean(props.onClick) &&
    css`
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.tag.default.backgroundHover};
      }

      &:active {
        background: ${(props) => props.theme.tag.default.backgroundActive};
      }
    `}

  ${(props) =>
    props.$isActive &&
    css`
      background: ${(props) => props.theme.tag.default.backgroundActive};
    `}
`
