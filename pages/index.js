import styled from "styled-components";

import {
  Footer,
  GitHubCorner,
  Header,
  QuizBackground,
  QuizLogo,
  Widget,
} from "../src/components";

import api from "../src/services/api";

export default function Home() {
  return (
    <>
      <Header
        title="SAO Quiz!"
        description="Quiz Time! Imersão Alura React Next.js"
        image={api.bg}
      />
      <QuizBackground backgroundImage={api.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{api.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{api.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gisabernardess/imersao-aluraquiz" />
      </QuizBackground>
    </>
  );
}

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
