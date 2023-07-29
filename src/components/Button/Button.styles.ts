import styled, { css } from "styled-components"

import { ButtonProps } from "./Button"
import pxToRem from "../../utils/pxToRem"

export const Container = styled.button<{
  $variant?: ButtonProps["variant"]
  $size?: ButtonProps["size"]
  $isBlock?: ButtonProps["isBlock"]
}>`
  background: transparent;
  outline: 0;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: ${pxToRem(6)};
  font-weight: 600;
  line-height: 1;

  ${(props) =>
    props.$variant === "default" &&
    css`
      background-color: ${props.theme.button.default.background};
      border-color: ${props.theme.button.default.borderColor};
      color: ${props.theme.button.default.color};

      &:hover {
        background-color: ${props.theme.button.default.backgroundHover};
      }

      &:active {
        background-color: ${props.theme.button.default.backgroundActive};
      }
    `}

  ${(props) =>
    props.$variant === "primary" &&
    css`
      background-color: ${props.theme.button.primary.background};
      border-color: ${props.theme.button.primary.borderColor};
      color: ${props.theme.button.primary.color};

      &:hover {
        background-color: ${props.theme.button.primary.backgroundHover};
        border-color: ${props.theme.button.primary.backgroundHover};
      }

      &:active {
        background-color: ${props.theme.button.primary.backgroundActive};
        border-color: ${props.theme.button.primary.backgroundActive};
      }
    `}

  ${(props) =>
    props.$size === "sm" &&
    css`
      height: ${pxToRem(32)};
      padding: 0 ${pxToRem(12)};
      font-size: ${pxToRem(14)};
    `}

  ${(props) =>
    props.$size === "md" &&
    css`
      height: ${pxToRem(40)};
      padding: 0 ${pxToRem(16)};
      font-size: ${pxToRem(16)};
    `}

  ${(props) =>
    props.$size === "lg" &&
    css`
      height: ${pxToRem(48)};
      padding: 0 ${pxToRem(24)};
      font-size: ${pxToRem(18)};
    `}

    ${(props) =>
    props.$isBlock &&
    css`
      width: 100%;
    `}
`
