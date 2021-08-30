import "./App.css";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Vector from "./Assets/Images/vector.png";
import Vector2 from "./Assets/Images/vector2.png";
import Button from "./Components/Button";
import ButtonTwo from "./Components/ButtonTwo";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import MediaQuery from "react-responsive";

const gradient = {
  light: `linear-gradient(201.83deg,
    #ff7bca 0.9%,
    rgba(255, 255, 255, 0.4) 78.87%)`,
  dark: `linear-gradient(104.3deg, #121212 33.84%, #1E3A8A 162.79%)`,
};

const gradientText = {
  light: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
  dark: "linear-gradient(90deg, #f59e0b 30.95%, #ef4444 77.15%)",
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
      props.mode
        ? gradient.light
        : gradient.dark} no-repeat center center fixed;
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
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 90%;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-width: 350px;
  max-width: 550px;
`;

const Text = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const H1 = styled.h1`
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Span = styled.span`
  background-color: black;

  /* Create the gradient. */
  background-image: ${(props) =>
    props.mode ? gradientText.light : gradientText.dark};

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
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainLink = styled.li`
  font-weight: bold;
  line-height: 36px;
  font-size: 24px;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [light, setmode] = useState(true);
  const [showmenu, setshowmenu] = useState(false);

  return (
    <AppContainer>
      <GlobalStyle mode={light} />
      <Container>
        <Navbar
          light={light}
          setmode={setmode}
          setshowmenu={setshowmenu}
          showmenu={showmenu}
        />
        {showmenu ? (
          <Menu>
            <Ul>
              <MainLink>Home</MainLink>
            </Ul>
            <Ul>
              <MainLink>Portfolio</MainLink>
            </Ul>
            <Ul onClick={() => setmode(!light)}>
              <MainLink>{light ? "DarkMode" : "LightMode"}</MainLink>
            </Ul>
          </Menu>
        ) : null}
        <Content>
          <Text>
            <H1>
              Hello 👋🏾 <br />
              Ilies 20 ans et futur <Span mode={light}>développeur</Span>
            </H1>
            <P>
              Jeune futur codeur, je suis passionné par ce domaine ainsi que par
              sa beauté et sa complexité. Je trouve aussi un grand intérêt en
              IA, en sécurité informatique et en design, domaines toujours plus
              innovants dans lesquels j’ambitionne de construire une carrière
              professionnelle.
            </P>
            <MediaQuery minWidth={769}>
              <Button light={light} content="Mes projets" />
            </MediaQuery>
          </Text>
          <Image>{light ? <Img src={Vector2} /> : <Img src={Vector} />}</Image>
          <MediaQuery maxWidth={768}>
            <Button light={light} content="Mes projets" />
            <ButtonTwo light={light} content="Mon profil" />
          </MediaQuery>
        </Content>
      </Container>
    </AppContainer>
  );
}

export default App;
