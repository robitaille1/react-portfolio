import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root {
    width: 100%;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    position: ${({ open }) => (open ? "fixed" : "static")};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
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
