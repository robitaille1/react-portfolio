import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    /* height: 100vh; */
    /* text-rendering: optimizeLegibility; */
    /* font-family: Maven Pro, -apple-system,  BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    font-family: 'Baloo Chettan 2', cursive;
  }
  div {
    text-align: left;
    @media (min-width: ${({ theme }) => theme.mobile}){
      text-align: center;
    }
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;
