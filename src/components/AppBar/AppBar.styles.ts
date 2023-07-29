import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.header<{
  $isFixed?: boolean
  $hasShadow?: boolean
}>`
  display: flex;
  justify-content: space-between;
  background: white;
  z-index: 100;
  transition: 0.3s ease box-shadow;
  background: ${(props) => props.theme.appBar.backgroundColor};

  & button:nth-child(2) {
    font-size: ${pxToRem(42)};
    color: ${(props) => props.theme.button.primary.background};
    padding: 0;
  }

  ${(props) =>
    props.$isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `}

  ${(props) =>
    props.$hasShadow &&
    css`
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    `}
`
