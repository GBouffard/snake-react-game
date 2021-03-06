import React from 'react'
import styled from 'styled-components'

import Button from './button'
import { phoneKeysToKeycodes, isClickable } from './helper'

const StyledGrid = styled.div`
  position: absolute;
  top: 66%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: 33vh;
`
let numberArrays = [...Array(10).keys()].slice(1)
numberArrays.push('*', '0', '#')

const click = (n, onKeyDown) => {
  let e = { preventDefault: () => {} }

  if (isClickable(n)) {
    e.keyCode = phoneKeysToKeycodes[n]
    onKeyDown(e)
  }
}

const Buttons = ({ onKeyDown }) => (
  <StyledGrid>
    {numberArrays.map(n => (
      <Button number={n} key={n} onClick={() => click(n, onKeyDown)} />
    ))}
  </StyledGrid>
)

export default Buttons
