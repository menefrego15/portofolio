import React from "react";
import styled from "styled-components";
import Vector from "../Assets/Images/Vector.svg";
import Dark from "../Assets/Images/dark.svg";

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
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Li = styled.li``;

const Navbar = ({ light, setmode }) => {
  return (
    <Nav>
      <Main>
        <Ul>
          <MainLink>Ilies</MainLink>
        </Ul>
      </Main>
      <Link>
        <Ul>
          <Li>Hello</Li>
        </Ul>
        <Ul>
          <Li>Portfolio</Li>
        </Ul>
      </Link>
      <Theme onClick={() => setmode(!light)}>
        <Ul>
          <Li>
            <Img src={light ? Vector : Dark} alt="Change Theme" />
          </Li>
        </Ul>
      </Theme>
    </Nav>
  );
};

export default Navbar;
