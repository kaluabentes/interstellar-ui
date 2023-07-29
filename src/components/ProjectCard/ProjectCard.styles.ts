import styled, { css } from "styled-components"

import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

export const Article = styled.article`
  position: relative;
  border-radius: ${pxToRem(10)};
  overflow: hidden;
  display: flex;
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

export const Overlay = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 95%
  );
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: 1s ease;

  ${queryLg(css`
    visibility: hidden;
    opacity: 0;
  `)}
`

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${pxToRem(16)};
  color: white;
  transition: 1s ease;

  ${queryLg(css`
    visibility: hidden;
    opacity: 0;
  `)}
`

export const Container = styled.button`
  background: transparent;
  padding: 0;
  outline: 0;
  margin: 0;
  border: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    & ${Content}, & ${Overlay} {
      visibility: visible;
      opacity: 1;
    }
  }

  &:focus {
    outline: 0;
  }
`

export const Title = styled(Heading)`
  margin: 0;
  line-height: 1;
  font-size: ${pxToRem(20)};
  margin-bottom: ${pxToRem(8)} !important;
`

export const Description = styled(Paragraph)`
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: ${pxToRem(8)} !important;
  font-size: ${pxToRem(14)};
  font-weight: 500;

  ${queryLg(css`
    margin-bottom: ${pxToRem(16)} !important;
  `)}
`
