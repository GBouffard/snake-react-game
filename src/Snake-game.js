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

// Game speed in milliseconds
const gameSpeed = 250;

const gridSize = 20;

const paintArea = gridSize - 2;

// set initial player position
let positionX = 10;
let positionY = 10;

// set initial player move/motion
const moveX = 1;
const moveY = 0;

// set empty snake snakeTrail
const snakeTrail = [];

// set initial target position
let targetX = 15;
let targetY = 15;

class SnakeGame extends Component {
  componentDidMount() {
    const canv = this.refs["myGameCanvas"];
    const ctx = canv.getContext("2d");
    this.interval = setInterval(() => this.game(ctx), gameSpeed);
  }

  game(ctx) {
    // paints the snake
    ctx.fillStyle = "darkgreen";
    snakeTrail.forEach(i =>
      ctx.fillRect(i.x * gridSize, i.y * gridSize, paintArea, paintArea)
    );

    // sets a new position x, y and updates the snakeTrail
    const x = (positionX += moveX);
    const y = (positionY += moveY);
    snakeTrail.push({ x, y });

    // paints the target
    ctx.fillStyle = "red";
    ctx.fillRect(targetX * gridSize, targetY * gridSize, paintArea, paintArea);
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
