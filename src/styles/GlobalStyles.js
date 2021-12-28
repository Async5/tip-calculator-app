import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Space Mono', monospace;
  }

  main {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.lightGrayishCyan1};

    @media ${(props) => props.theme.breakpoints.lg} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        padding: 8rem 0rem;
        margin-top: -16rem;
      }
    }
  }

  h1,h2,h2,h4,h5,h6 {
    margin: 0;
  }

  h1 {
    color: ${(props) => props.theme.colors.veryDarkCyan};
    letter-spacing: 1rem;
    font-size: 2.4rem;
    text-align: center;
    padding: 4rem 0rem;
  }
  
  h2 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.darkGrayishCyan1};
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 3.2rem;
    color: ${(props) => props.theme.colors.strongCyan};

    @media ${(props) => props.theme.breakpoints.lg} { 
      font-size: 4.9rem;
    }
  }

  small {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.darkGrayishCyan2};
    font-weight: 700;
  }

  input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }

  .attribution { font-size: 11px; text-align: center; }
  .attribution a { color: hsl(228, 45%, 44%); }
`;

export default GlobalStyles;
