import css from 'styled-jsx/css'

import { breakpoints, colors, fonts } from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.2)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 2px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 5px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
  textarea,
  input {
    font-family: ${fonts.base};
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    width: 100%;
    place-items: center;
  }

  main {
    overflow-y: auto;
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    height: 100%;
    border: solid 1px ${colors.primary};
    /* box-shadow: 0px 6px 0px -4px ${colors.primary}; */
    width: 100%;
    position: relative;
  }

  //midas de pc
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: fit-content;
      max-height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`
