import React from 'react'
import styled from 'styled-components'

const StyledScoreDisplay = styled.div`
  position: absolute;
  top: 1vh;
  left: 1vw;
  font-size: 3vh;
  color: white;
  text-shadow: 0.2vh 0.2vh 0.5vh black, 0 0 4vh lightsteelblue, 0 0 1vh aqua;
  z-index: 999;
`

const ScoreDisplay = ({ score }) => (
  <StyledScoreDisplay>
    Score:
    {score}
  </StyledScoreDisplay>
)

export default ScoreDisplay
