import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const Content = styled.p<{ $isActive?: boolean }>`
  margin: 0;
  font-weight: 600;
  font-size: ${pxToRem(14)} !important;
  background: ${(props) => props.theme.tooltip.background};
  color: ${(props) => props.theme.tooltip.color};
  display: none;
  position: absolute;
  width: initial;
  top: 0;
  transform: translateY(-130%);
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)} ${pxToRem(6)};
  align-items: center;
  text-align: center;
  z-index: 50;
  line-height: 1 !important;

  ${queryLg(css`
    white-space: nowrap;
  `)}

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: ${pxToRem(6)} solid transparent;
    border-right: ${pxToRem(6)} solid transparent;
    border-top: ${pxToRem(6)} solid ${(props) => props.theme.tooltip.background};
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${(props) =>
    props.$isActive &&
    css`
      display: inline-flex;
    `}
`

export const Trigger = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
`
