import React from 'react'
import styled from 'styled-components'

import { isClickable } from './helper'

const StyledButton = styled.button`
  z-index: 500;
  background-color: lightgrey;
  color: black;
  box-shadow: 0 0.8vh #1a1a1a;
  border: none;
  border-radius: 50%;
  outline: none;
  font-size: 4vh;
  font-weight: bold;
  margin: 1.25vh 1vh 0;
  cursor: ${props => (isClickable(props.children) ? 'pointer' : 'default')};

  &:active {
    background-color: #bababa;
    color: ${props =>
    isClickable(props.children) ? 'lightgoldenrodyellow' : 'black'};
    box-shadow: 0 0.2vh #050505;
    text-shadow: ${props =>
    isClickable(props.children)
      ? '0.2vh 0.2vh 0.4vh grey, 0 0 5vh lightgoldenrodyellow, 0 0 1vh yellow'
      : 'null'};
    transform: translateY(0.6vh);
  }
`

const Button = ({ number, onClick }) => (
  <StyledButton onClick={onClick}>{number}</StyledButton>
)

export default Button
