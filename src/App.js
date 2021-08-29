import "./App.css";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Vector from "./Assets/Images/vector.png";
import Button from "./Components/Button";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

const gradient = {
  light: `linear-gradient(101.83deg,
    #ff7bca 0.9%,
    rgba(255, 197, 111, 0.4) 78.87%)`,
  dark: `linear-gradient(104.3deg, #121212 33.84%, #1E3A8A 162.79%)`,
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => (props.mode ? gradient.light : gradient.dark)};
    color: ${(props) => (props.mode ? "#111827" : "#F9FAFB")};
    -webkit-transition: background-color 2s; /* For Safari 3.1 to 6.0 */
    -webkit-transition: all .4s ease-in-out;
    -moz-transition:    all .4s ease-in-out;
    -o-transition:      all .4s ease-in-out;
    -ms-transition:     all .4s ease-in-out;
    transition:         all .4s ease-in-out;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  margin: 0px 10% 0px 10%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 50px;
`;

const Img = styled.img`
  width: 90%;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Text = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const H1 = styled.h1`
  margin: 0px;
`;

const Span = styled.span`
  background-color: black;

  /* Create the gradient. */
  background-image: linear-gradient(90deg, #f59e0b 30.95%, #ef4444 77.15%);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const P = styled.p`
  width: 80%;
  font-size: 1.2rem;
`;

function App() {
  const [light, setmode] = useState(true);
  console.log(light);
  return (
    <AppContainer>
      <GlobalStyle mode={light} />
      <Container>
        <Navbar light={light} setmode={setmode} />
        <Content>
          <Text>
            <H1>
              Hello 👋🏾 <br />
              Ilies 20 ans et futur <Span>développeur</Span>
            </H1>
            <P>
              Jeune futur codeur, je suis passionné par ce domaine ainsi que par
              sa beauté et sa complexité. Je trouve aussi un grand intérêt en
              IA, en sécurité informatique et en design, domaines toujours plus
              innovants dans lesquels j’ambitionne de construire une carrière
              professionnelle.
            </P>
            <Button light={light} content="Mes projets" />
          </Text>
          <Image>
            <Img src={Vector} />
          </Image>
        </Content>
      </Container>
    </AppContainer>
  );
}

export default App;
