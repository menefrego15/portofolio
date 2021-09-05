import React from "react";
import styled from "styled-components";
import Vector from "../Assets/Images/Vector.svg";
import Dark from "../Assets/Images/dark.svg";
import hamburger from "../Assets/Images/hamburger.svg";
import hamburgerdark from "../Assets/Images/hamburgerdark.svg";
import cross from "../Assets/Images/cross.svg";
import crosswhite from "../Assets/Images/crosswhite.svg";
import MediaQuery from "react-responsive";
import { Link as A, useLocation } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Main = styled.div``;

const MainLink = styled.li`
  font-weight: bold;
  line-height: 36px;
  font-size: 24px;
`;
const Theme = styled.div``;
const Link = styled.div`
  display: flex;
  flex-direction: row;
  li {
    padding-inline-start: 40px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const Li = styled.li``;

const Navbar = ({ light, changeMode, showmenu, setshowmenu }) => {
  let location = useLocation();

  return (
    <Nav>
      <Main>
        <Ul>
          <A to="/">
            <MainLink>Ilies</MainLink>
          </A>
        </Ul>
      </Main>
      <MediaQuery minWidth={768}>
        <Link>
          <A to="/">
            <Ul>
              {location.pathname === "/" ? (
                <u>
                  <Li>Home</Li>
                </u>
              ) : (
                <Li>Home</Li>
              )}
            </Ul>
          </A>
          <A to="/Project">
            <Ul>
              {location.pathname === "/Project" ? (
                <u>
                  <Li>Portfolio</Li>
                </u>
              ) : (
                <Li>Portfolio</Li>
              )}
            </Ul>
          </A>
        </Link>
        <Theme onClick={() => changeMode()}>
          <Ul>
            <Li>
              <Img src={light ? Vector : Dark} alt="Change Theme" />
            </Li>
          </Ul>
        </Theme>
      </MediaQuery>
      <MediaQuery maxWidth={769}>
        <Ul>
          <Li onClick={() => setshowmenu(!showmenu)}>
            {showmenu ? (
              <Img src={light ? cross : crosswhite} alt="Menu" />
            ) : (
              <Img src={light ? hamburgerdark : hamburger} alt="Menu" />
            )}
          </Li>
        </Ul>
      </MediaQuery>
    </Nav>
  );
};

export default Navbar;
