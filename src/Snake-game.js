import React, { Component } from 'react'
import styled from 'styled-components'

const phoneColors = {
  light: '#AEC108',
  dark: '#5C5003'
}

const StyledImage = styled.img`
  position: absolute;
  height: 100%;
`

const StyledDiv = styled.div`
  background: grey;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledCanvas = styled.canvas`
  border: 2px ridge ${phoneColors.dark};
  z-index: 100;
  position: absolute;
  top: 28%;
`

// Game dimensions and speed
const cellSizeX = 8
const cellSizeY = 6
const tileCount = 20
const paintAreaX = cellSizeX - 1
const paintAreaY = cellSizeY - 1
const gameSpeed = 100

// initial player position
let x
let y
// initial snake velocity as [x, y]
let velocity
// initial snake trail and snake length
let snakeTrail
let snakeLength
// initial target position
let targetX
let targetY

const resetGame = () => {
  velocity = [1, 0]
  x = 10
  y = 10
  snakeTrail = []
  snakeLength = 5
  targetX = Math.floor(Math.random() * tileCount)
  targetY = Math.floor(Math.random() * tileCount)
}
resetGame()

const isLeft = e => e.keyCode === 37
const isUp = e => e.keyCode === 38
const isRight = e => e.keyCode === 39
const isDown = e => e.keyCode === 40
const isLost = (i, x, y) => i.x === x && i.y === y
const isWon = (targetX, x, targetY, y) => targetX === x && targetY === y

class SnakeGame extends Component {
  componentWillMount () {
    clearInterval(this.interval)
  }

  componentDidMount () {
    const canv = this.refs['myGameCanvas']
    const ctx = canv.getContext('2d')
    document.addEventListener('keydown', this.onKeyDown)
    this.interval = setInterval(() => this.game(canv, ctx), gameSpeed)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
    clearInterval(this.interval)
    resetGame()
  }

  onKeyDown (e) {
    e.preventDefault()

    // checks for keys but also prevents a move in an opposite direction
    if (isLeft(e) && velocity[0] !== 1 && velocity[1] !== 0) {
      velocity = [-1, 0]
    } else if (isUp(e) && velocity[0] !== 0 && velocity[1] !== 1) {
      velocity = [0, -1]
    } else if (isRight(e) && velocity[0] !== -1 && velocity[1] !== 0) {
      velocity = [1, 0]
    } else if (isDown(e) && velocity[0] !== 0 && velocity[1] !== -1) {
      velocity = [0, 1]
    }
  }

  game (canv, ctx) {
    // paints the canvas background
    ctx.fillStyle = phoneColors.light
    ctx.fillRect(0, 0, canv.width, canv.height)

    // sets the new x and y positions
    x += velocity[0]
    y += velocity[1]

    // paints the snake
    ctx.fillStyle = phoneColors.dark
    snakeTrail.forEach(i => {
      ctx.fillRect(i.x * cellSizeX, i.y * cellSizeY, paintAreaX, paintAreaY)

      if (isLost(i, x, y)) {
        resetGame()
      }
    })

    // redefine x & y if the snake exits the game area
    if (x < 0) x = tileCount - 1
    if (x > tileCount - 1) x = 0
    if (y < 0) y = tileCount - 1
    if (y > tileCount - 1) y = 0

    // updates the snakeTrail with the new coordinate
    snakeTrail.push({ x, y })

    // removes irrelevant coordinates to keep the trail length equal to the snake length
    if (snakeTrail.length > snakeLength) {
      snakeTrail = snakeTrail.slice(snakeTrail.length - snakeLength)
    }

    if (isWon(targetX, x, targetY, y)) {
      snakeLength++
      targetX = Math.floor(Math.random() * tileCount)
      targetY = Math.floor(Math.random() * tileCount)
    }

    // paints the target
    ctx.fillStyle = phoneColors.dark
    ctx.fillRect(
      targetX * cellSizeX,
      targetY * cellSizeY,
      paintAreaX,
      paintAreaY
    )
    ctx.fillStyle = phoneColors.light
    ctx.fillRect(targetX * cellSizeX + 2, targetY * cellSizeY + 2, 3, 1)
  }

  render () {
    return (
      <StyledDiv>
        <StyledImage src='./nostalgic_phone.png' alt='nostalgic_phone' />
        <StyledCanvas
          height='120'
          width='160'
          id='gameCanvas'
          ref='myGameCanvas'
        />
      </StyledDiv>
    )
  }
}

export default SnakeGame
