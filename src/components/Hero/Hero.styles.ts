import styled, { css } from "styled-components"
import pxToRem from "../../utils/pxToRem"
import queryLg from "../../utils/queryLg"

export const Container = styled.article<{ $isReversed?: boolean }>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(22)};
  padding: ${pxToRem(84)} 0;

  & img {
    max-width: ${pxToRem(200)};
  }

  ${queryLg(css`
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: ${pxToRem(100)};

    & img {
      max-width: ${pxToRem(300)};
    }
  `)}

  ${(props) =>
    props.$isReversed &&
    css`
      flex-direction: column-reverse;

      ${queryLg(css`
        flex-direction: row-reverse;
      `)}
    `}
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(22)};

  & * {
    margin: 0;
    text-align: center;
  }

  & h1 {
    line-height: 1.2;
    margin: 0;
  }

  & p {
    font-weight: 500;
    transform: translateY(-4px);
    font-size: ${pxToRem(18)};
    text-align: center;
  }

  ${queryLg(css`
    align-items: start;
    justify-content: start;
    gap: ${pxToRem(32)};

    & * {
      text-align: left;
    }

    & h1 {
      line-height: 1;
      font-size: ${pxToRem(54)};
    }

    & p {
      text-align: left;
    }
  `)}
`
