import styled from 'styled-components'

const phoneColors = {
  light: '#AEC108',
  dark: '#5C5003'
}

const PhoneImage = styled.img`
  z-index: 2;
  position: absolute;
  height: 100%;
`

const Container = styled.div`
  background: linear-gradient(to right, teal, white, teal);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GameArea = styled.canvas`
  position: absolute;
  z-index: 100;
  top: 28%;
  height: 17.5%;
  border: 2px ridge ${phoneColors.dark};
`

const PhoneBackscreen = styled.canvas`
  position: relative;
  z-index: 1;
  top: 25%;
  background: ${phoneColors.light};
  height: 24%;
`

export { phoneColors, Container, PhoneImage, GameArea, PhoneBackscreen }
