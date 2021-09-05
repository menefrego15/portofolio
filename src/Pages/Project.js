import "../App.css";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Survival from "../Assets/Images/survival.png";
import Hsl from "../Assets/Images/hsl.png";
import Greem from "../Assets/Images/greem.png";
import Foodfactory from "../Assets/Images/foodfactory.png";
import Escape from "../Assets/Images/escape.png";
import Playern from "../Assets/Images/playern.png";
import Color from "../Assets/Images/color.png";
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
  flex-direction: column;
  padding-top: 50px;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 180px;
  margin: 20px 40px 20px 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    img {
      margin: 20px 10px 20px 10px;
    }
  }
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

function Project() {
  const [light, setmode] = useState(localStorage.getItem("light") || "");
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
          setmode={setmode}
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
            <H1>Mes projets</H1>
          </Text>
          <Image>
            <A to="https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9">
              <Img src={Playern} />
            </A>
            <A to="/">
              <Img src={Color} />
            </A>
            <A to="/">
              <Img src={Hsl} />
            </A>
            <A to="/">
              <Img src={Escape} />
            </A>
            <A to="/">
              <Img src={Survival} />
            </A>
            <A to="/">
              <Img src={Greem} />
            </A>
            <A to="/">
              <Img src={Foodfactory} />
            </A>
          </Image>
        </Content>
      </Container>
    </AppContainer>
  );
}

export default Project;
