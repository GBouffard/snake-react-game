import React from 'react'
import styled from 'styled-components'

const StyledScoreDisplay = styled.div`
  position: absolute;
  top: 1vh;
  left: 1vw;
`

const ScoreDisplay = ({ score }) => (
  <StyledScoreDisplay>
    Score:
    {score}
  </StyledScoreDisplay>
)

export default ScoreDisplay
