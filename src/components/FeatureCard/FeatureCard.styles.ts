import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(12)};
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(12)};
  transition: 0.3s ease-in;

  & * {
    margin: 0 !important;
  }

  & h3 {
    font-size: ${pxToRem(20)};
  }

  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
  }
`

export const Icon = styled.div`
  font-size: ${pxToRem(52)};
  line-height: 1;
  color: ${(props) => props.theme.button.primary.background};
`
