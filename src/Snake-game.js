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

// Game dimensions and speed
const gridSize = 20;
const tileCount = 20;
const paintArea = gridSize - 2;
const gameSpeed = 125;

// initial player position
let x;
let y;
// initial snake velocity as [x, y]
let velocity;
// initial snake trail and snake length
let snakeTrail;
let snakeLength;
// initial target position
let targetX;
let targetY;

const resetGame = () => {
  velocity = [1, 0];
  x = 10;
  y = 10;
  snakeTrail = [];
  snakeLength = 5;
  targetX = Math.floor(Math.random() * tileCount);
  targetY = Math.floor(Math.random() * tileCount);
};
resetGame();

const isLeft = e => e.keyCode === 37;
const isUp = e => e.keyCode === 38;
const isRight = e => e.keyCode === 39;
const isDown = e => e.keyCode === 40;
const isLost = (i, x, y) => i.x === x && i.y === y;
const isWon = (targetX, x, targetY, y) => targetX === x && targetY === y;

class SnakeGame extends Component {
  componentWillMount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    const canv = this.refs["myGameCanvas"];
    const ctx = canv.getContext("2d");
    document.addEventListener("keydown", this.onKeyDown);
    this.interval = setInterval(() => this.game(canv, ctx), gameSpeed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    clearInterval(this.interval);
    resetGame();
  }

  onKeyDown(e) {
    e.preventDefault();

    if (isLeft(e)) {
      velocity = [-1, 0];
    } else if (isUp(e)) {
      velocity = [0, -1];
    } else if (isRight(e)) {
      velocity = [1, 0];
    } else if (isDown(e)) {
      velocity = [0, 1];
    }
  }

  game(canv, ctx) {
    // paints the canvas background
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // sets the new x and y positions
    x += velocity[0];
    y += velocity[1];

    // paints the snake
    ctx.fillStyle = "darkgreen";
    snakeTrail.forEach(i => {
      ctx.fillRect(i.x * gridSize, i.y * gridSize, paintArea, paintArea);

      if (isLost(i, x, y)) {
        resetGame();
      }
    });

    // redefine x & y if the snake exits the game area
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

    if (isWon(targetX, x, targetY, y)) {
      snakeLength++;
      targetX = Math.floor(Math.random() * tileCount);
      targetY = Math.floor(Math.random() * tileCount);
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
