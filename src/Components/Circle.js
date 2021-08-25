import React from "react";
import styled from "styled-components";

const Circle1 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: -50px;
  left: -50px;
  background-color: red;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    #f22fb0 30%,
    rgba(245, 138, 37, 0) 100%,
    #7061a3 100%
  );
  filter: blur(70px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Circle2 = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: -20px;
  left: -50px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    #ff7bca 0%,
    rgba(255, 197, 111, 0.46) 100%
  );
  filter: blur(70px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Circle3 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: -100px;
  right: -100px;
  background-color: red;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    #f22fb0 30%,
    rgba(245, 138, 37, 0) 100%,
    #7061a3 100%
  );
  filter: blur(90px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Circle4 = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  bottom: -70px;
  right: -50px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    #ff7bca 0%,
    rgba(255, 197, 111, 0.46) 100%
  );
  filter: blur(150px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Circle = () => {
  return (
    <>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
    </>
  );
};

export default Circle;
