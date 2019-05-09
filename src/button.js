import React from "react";
import styled from "styled-components";

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
  cursor: pointer;

  &:active {
    background-color: #bababa;
    color: lightgoldenrodyellow;
    box-shadow: 0 0.2vh #050505;
    text-shadow: 0.2vh 0.2vh 0.4vh grey, 0 0 5vh lightgoldenrodyellow,
      0 0 1vh yellow;
    transform: translateY(0.6vh);
  }
`;

const Button = ({ number, onClick }) => (
  <StyledButton onClick={onClick}>{number}</StyledButton>
);

export default Button;