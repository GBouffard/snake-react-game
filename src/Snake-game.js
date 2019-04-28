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
  border: 10px ridge darkgoldenrod;
`;

// Game speed in milliseconds
const gameSpeed = 250;

// Game area dimensions: 20 x 20
const gridSize = 20;
const tileCount = 20;
const paintArea = gridSize - 2;

// set initial player position
let x = 10;
let y = 10;

// set initial player move/motion
const moveX = 1;
const moveY = 0;

// set initial snake trail and snake length
let snakeTrail = [];
let snakeLength = 5;

// set initial target position
let targetX = 15;
let targetY = 15;

class SnakeGame extends Component {
  componentDidMount() {
    const canv = this.refs["myGameCanvas"];
    const ctx = canv.getContext("2d");
    this.interval = setInterval(() => this.game(canv, ctx), gameSpeed);
  }

  game(canv, ctx) {
    // paints the canvas background
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // paints the snake
    ctx.fillStyle = "darkgreen";
    snakeTrail.forEach(i =>
      ctx.fillRect(i.x * gridSize, i.y * gridSize, paintArea, paintArea)
    );

    // sets the new x and y positions
    x += moveX;
    y += moveY;

    // redefine x & y  if the snake exits the game area
    if (x < 0) x = tileCount - 1;
    if (x > tileCount - 1) x = 0;
    if (y < 0) y = tileCount - 1;
    if (y > tileCount - 1) y = 0;

    // updates the snakeTrail with the new coordinate
    snakeTrail.push({ x, y });

    // removes irrelevant coordinates to keep the trail length equal to the snake length
    if (snakeTrail.length > snakeLength) {
      snakeTrail = snakeTrail.slice(snakeTrail.length - snakeLength);
    }

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
