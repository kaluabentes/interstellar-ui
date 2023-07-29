import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(28)};
  padding: ${pxToRem(16)};
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.iconButton.color};

  &:hover {
    color: ${(props) => props.theme.iconButton.colorHover};
  }
`
