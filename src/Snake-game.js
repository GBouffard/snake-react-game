import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: grey;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCanvas = styled.canvas`
  background: lightgreen;
  width: 400px;
  height: 400px;
  border: 10px ridge darkgoldenrod;
`;

const SnakeGame = () => (
  <StyledDiv>
    <StyledCanvas id="gameCanvas" />
  </StyledDiv>
);

export default SnakeGame;
