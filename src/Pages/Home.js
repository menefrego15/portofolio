import "../App.css";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Vector from "../Assets/Images/vector.png";
import Vector2 from "../Assets/Images/vector2.png";
import Button from "../Components/Button";
import ButtonTwo from "../Components/ButtonTwo";
import { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import { Link as A } from "react-router-dom";

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
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
    props.light ? gradientText.light : gradientText.dark};

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

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function Home() {
  const [light, setmode] = useState(localStorage.getItem("light") || "");
  const [showprofil, setshowprofil] = useState(false);
  const [theme, settheme] = useState(false);
  const [showmenu, setshowmenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("light", light);
  }, [light]);

  useEffect(() => {
    if (light === "light") {
      settheme(true);
    } else if (light === "dark") {
      settheme(false);
    }
  }, [light]);

  const changeMode = () => {
    if (light === "light") {
      console.log("go dark");
      setmode("dark");
    } else {
      console.log("go light");
      setmode("light");
    }
  };

  return (
    <AppContainer>
      <GlobalStyle mode={theme} />
      <Container>
        <Navbar
          light={theme}
          setshowmenu={setshowmenu}
          showmenu={showmenu}
          changeMode={changeMode}
        />
        {showmenu ? (
          <Menu>
            <A to="/">
              <Ul>
                <MainLink>Home</MainLink>
              </Ul>
            </A>
            <A to="/Project">
              <Ul>
                <MainLink>Portfolio</MainLink>
              </Ul>
            </A>
            <Ul onClick={() => changeMode()}>
              <MainLink>{theme ? "DarkMode" : "LightMode"}</MainLink>
            </Ul>
          </Menu>
        ) : null}
        <Content>
          <Text>
            <H1>
              Hello 👋🏾 <br />
              Ilies, <Span light={theme}>développeur</Span>
            </H1>
            <P>
              Jeune codeur ambitieux, je suis passionné par ce domaine ainsi que
              par sa beauté et sa complexité. Je nourris aussi un grand intérêt
              en IA, en sécurité informatique et en design, domaines toujours
              plus innovants dans lesquels j’ambitionne de construire une
              carrière professionnelle.
            </P>
            <MediaQuery minWidth={769}>
              <A to="/Project">
                <Button light={theme} content="Mes projets" />
              </A>
            </MediaQuery>
          </Text>
          <Image>{theme ? <Img src={Vector2} /> : <Img src={Vector} />}</Image>
          <MediaQuery maxWidth={768}>
            <A to="/Project">
              <Button light={theme} content="Mes projets" />
            </A>
            <ButtonTwo light={theme} content="Mon profil" />
          </MediaQuery>
        </Content>
      </Container>
    </AppContainer>
  );
}

export default Home;
