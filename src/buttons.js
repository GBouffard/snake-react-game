import React from "react";
import styled from "styled-components";

import Button from "./button";

const StyledGrid = styled.div`
  position: absolute;
  top: 66%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: 33vh;
`;

let numberArrays = [...Array(10).keys()].slice(1);
numberArrays.push("*", "0", "#");

const Buttons = () => (
  <StyledGrid>
    {numberArrays.map(n => (
      <Button number={n} onClick={() => {}} />
    ))}
  </StyledGrid>
);

export default Buttons;
