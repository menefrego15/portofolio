import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: none;
  width: 28%;
  color: ${(props) => (props.light ? "rgba(31, 41, 55, 1)" : "#F5F5F5")};
  border: none;
  margin-top: 15px;
  font-size: 1.1rem;
  cursor: pointer;
  min-width: 140px;
  text-decoration: underline;
`;

const ButtonTwo = ({ light, content, fx }) => {
  return (
    <Btn light={light} onclick={fx}>
      {content}
    </Btn>
  );
};

export default ButtonTwo;
