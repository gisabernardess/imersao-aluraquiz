import { createGlobalStyle, ThemeProvider } from "styled-components";
import api from "../src/services/api.json";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = api.theme;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
