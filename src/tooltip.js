import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import isTouch from 'is-touch-device'

const message = `Snake is a video game where the player maneuvers a snake which grows in length each time it reaches food. The goal is to make the snake as large as possible before the game ends which happens when the snake moves into itself. The first version originated in 1976 and the one below (from 1998) came as a package on old mobile phone.


How to play:
• on desktop; use the arrow keys (↑, →, ↓, ←).
• on mobile; like on an original phone, click the following keys instead:
  2 (↑)  4 (←)  6 (→)  8 (↓)`

const StyledTrigger = styled.svg`
  position: absolute;
  right: 0;
  height: 12vw;
  width: 12vw;
  cursor: default;
`

const StyledCircle = styled.circle`
  cx: 50%;
  cy: 50%;
  r: 4vw;
  stroke: darkgrey;
  stroke-width: 3;
`

const StyledText = styled.text`
  font-weight: bold;
  font-size: 6vw;
  fill: ghostwhite;
`

const StyledMessageContainer = styled.div`
  position: absolute;
  top: 15vw;
  width: 92vw;
  height: 75vh;
  z-index: 900;

  &&::after {
    content: "";
    position: absolute;

    border-bottom: 3vw solid darkgrey;
    border-right: 2vw solid transparent;
    border-left: 2vw solid transparent;
    top: -1vw;
    right: 0;
    transform: translateY(-50%);
  }
`

const StyledMessage = styled.div`
  background: linear-gradient(#333333, black, #333333);
  border: 0.5vw solid darkgrey;
  border-radius: 1vw;
  color: white;
  font-size: 2vh;
  font-weight: 500;
  line-height: 1.4;
  white-space: pre-wrap;
  padding: 5vw;
  text-align: left;
`

const Tooltip = () => {
  const [shouldShow, updateShouldShow] = useState(false)

  const actionsProps = {
    onMouseOver: () => (isTouch() ? null : updateShouldShow(true)),
    onMouseLeave: () => (isTouch() ? null : updateShouldShow(false)),
    onClick: () => (isTouch() ? updateShouldShow(!shouldShow) : null)
  }

  return (
    <Fragment>
      <StyledTrigger>
        <radialGradient id='circleGradient'>
          <stop offset='1%' stopColor='black' />
          <stop offset='95%' stopColor='#333333' />
        </radialGradient>

        <StyledCircle fill="url('#circleGradient')" {...actionsProps} />

        <StyledText
          x='50%'
          y='55%'
          dominantBaseline='middle'
          textAnchor='middle'
          {...actionsProps}
        >
          ?
        </StyledText>
      </StyledTrigger>

      {shouldShow && (
        <StyledMessageContainer>
          <StyledMessage>{message}</StyledMessage>
        </StyledMessageContainer>
      )}
    </Fragment>
  )
}

export default Tooltip
