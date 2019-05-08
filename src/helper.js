const isLeft = e => e.keyCode === 37
const isUp = e => e.keyCode === 38
const isRight = e => e.keyCode === 39
const isDown = e => e.keyCode === 40
const isLost = (i, x, y) => i.x === x && i.y === y
const isWon = (targetX, x, targetY, y) => targetX === x && targetY === y

export { isLeft, isUp, isRight, isDown, isLost, isWon }