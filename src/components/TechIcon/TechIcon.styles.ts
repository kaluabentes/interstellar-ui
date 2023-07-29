import styled, { css } from "styled-components"

import { TechIconProps } from "./TechIcon"
import pxToRem from "../../utils/pxToRem"

export const Icon = styled.div<{ $name: TechIconProps["name"] }>`
  line-height: 1;
  color: ${(props) => props.theme.button.primary.background};
  width: 60px;
  height: 60px;
  font-size: ${pxToRem(42)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${pxToRem(8)};
  border: 0;
  outline: 0;
  background: transparent;

  ${(props) => {
    switch (props.$name) {
      case "html":
        return css`
          background-color: #e85823;
          color: white;
        `
      case "css":
        return css`
          background-color: #264de4;
          color: white;
        `
      case "javascript":
        return css`
          background-color: black;
          color: #f7df1e;
        `
      case "typescript":
        return css`
          background-color: #3178c6;
          color: white;
        `
      case "react":
        return css`
          background-color: #222222;
          color: #02dafa;
        `
      case "redux":
        return css`
          background-color: #222222;
          color: #7652db;
        `
      case "vue":
        return css`
          background-color: #34495e;
          color: #41b883;
        `
      case "jest":
        return css`
          background-color: #ca451a;
          color: white;
        `
      case "testing-library":
        return css`
          background-color: #4a5060;
          color: white;
        `
      case "cypress":
        return css`
          background-color: #1b1e2e;
          color: white;
        `
      case "next":
        return css`
          background-color: black;
          color: white;
        `
      case "nodejs":
        return css`
          background-color: #333333;
          color: #7fbd42;
        `
      case "graphql":
        return css`
          background-color: #db0173;
          color: white;
        `
      case "prisma":
        return css`
          background-color: #0c344b;
          color: white;
        `
      case "postgres":
        return css`
          background-color: #336791;
          color: white;
        `
      case "styled-components":
        return css`
          background: rgb(235, 104, 148);
          background: linear-gradient(
            60deg,
            rgba(235, 104, 148, 1) 0%,
            rgba(251, 179, 78, 1) 100%
          );
          color: white;
        `
      case "jamstack":
        return css`
          background-color: #f0047f;
          color: white;
        `
      case "pwa":
        return css`
          background-color: #5a0fc8;
          color: white;
        `
      case "vercel":
        return css`
          background-color: black;
          color: white;
        `
      case "chatgpt":
        return css`
          background-color: #74aa9c;
          color: white;
        `
      case "strapi":
        return css`
          background-color: #4945ff;
          color: white;
        `
      case "storybook":
        return css`
          background-color: #ff4785;
          color: white;
        `
      case "eslint":
        return css`
          background-color: #4b32c3;
          color: white;
        `
      case "shopify":
        return css`
          background-color: #5e8e3e;
          color: white;
        `
      case "react-native":
        return css`
          background-color: #222222;
          color: #02dafa;
        `
      case "angular":
        return css`
          background-color: #dd0031;
          color: white;
        `
      case "php":
        return css`
          background-color: #777bb3;
          color: white;
        `
      case "mysql":
        return css`
          background-color: #00618b;
          color: white;
        `
      case "laravel":
        return css`
          background-color: #ef3b2d;
          color: white;
        `
      case "gulp":
        return css`
          background-color: #f44a4c;
          color: white;
        `
      case "wordpress":
        return css`
          background-color: #21759b;
          color: white;
        `
      case "sass":
        return css`
          background-color: #cd6799;
          color: white;
        `
      case "cssmodules":
        return css`
          background-color: black;
          color: white;
        `
      case "github":
        return css`
          background-color: black;
          color: white;
        `
      case "git":
        return css`
          background-color: #f05033;
          color: white;
        `
      case "django":
        return css`
          background-color: #0c4c32;
          color: white;
        `
      case "wagtail":
        return css`
          background-color: #41b0ae;
          color: white;
        `
      case "python":
        return css`
          background-color: #366b98;
          color: white;
        `
      case "nestjs":
        return css`
          background-color: #ea2845;
          color: white;
        `
      case "context-api":
        return css`
          background-color: #222222;
          color: #02dafa;
        `
      case "react-hooks":
        return css`
          background-color: #222222;
          color: #02dafa;
        `
      case "design-system":
        return css`
          background-color: ${(props) => props.theme.button.primary.background};
          color: white;
        `
    }
  }}
`
