import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${(props) => (props.light ? "rgba(31, 41, 55, 1)" : "#F5F5F5")};
  width: 28%;
  height: 50px;
  border-radius: 20px;
  color: ${(props) => (props.light ? "#F5F5F5" : "rgba(31, 41, 55, 1)")};
  border: none;
  margin-top: 15px;
  font-size: 1.1rem;
  cursor: pointer;
  min-width: 140px;
`;

const Button = ({ light, content, fx }) => {
  return (
    <Btn light={light} onclick={fx}>
      {content} →
    </Btn>
  );
};

export default Button;
