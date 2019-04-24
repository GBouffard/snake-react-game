import React, { Component } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: lightgray;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-shadow: 3px 3px darkslategrey;
`;

const StyledDiv = styled.div`
  background: grey;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCanvas = styled.canvas`
  background: lightgreen;
  border: 10px ridge darkgoldenrod;
`;

// set initial target position
let targetX = 15,
  targetY = 15;

class SnakeGame extends Component {
  componentDidMount() {
    const canv = this.refs["myGameCanvas"];
    const ctx = canv.getContext("2d");

    this.game(canv, ctx);
  }

  game(canv, ctx) {
    // paint target
    ctx.fillStyle = "red";
    ctx.fillRect(targetX * 20, targetY * 20, 20 - 2, 20 - 2);
  }

  render() {
    return (
      <StyledDiv>
        <StyledTitle>Guillaume's Snake Game</StyledTitle>
        <StyledCanvas
          height="400"
          width="400"
          id="gameCanvas"
          ref="myGameCanvas"
        />
      </StyledDiv>
    );
  }
}

export default SnakeGame;
