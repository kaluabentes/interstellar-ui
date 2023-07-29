import styled from "styled-components"

import pxToRem from "../../utils/pxToRem"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

export const Container = styled.article``

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
  margin-bottom: ${pxToRem(4)};

  & span {
    height: ${pxToRem(6)};
    width: ${pxToRem(6)};
    border-radius: 50%;
    background: ${(props) => props.theme.paragraph.muted.color};
  }

  & p {
    font-size: ${pxToRem(14)};
    font-weight: 600;
    margin: 0;
  }
`

export const Title = styled(Heading)`
  margin: 0;
  font-size: ${pxToRem(22)};
  margin-bottom: ${pxToRem(4)};
`

export const Description = styled(Paragraph)`
  color: ${(props) => props.theme.paragraph.muted.color};
  margin-bottom: ${pxToRem(12)} !important;
`

export const TagBox = styled.div`
  display: flex;
  gap: ${pxToRem(5)};
`

export const Image = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
  height: 220px;
  margin-bottom: ${pxToRem(22)};
`
