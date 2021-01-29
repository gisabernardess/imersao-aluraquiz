import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from '../src/components';
import api from '../src/services/api.json';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.contrastText};
    background: #ebf2f5;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem 'Lato', sans-serif;
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

const { theme } = api;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header
        title="SAO Quiz!"
        description="Quiz Time! Imersão Alura React Next.js"
        image={api.bg}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
