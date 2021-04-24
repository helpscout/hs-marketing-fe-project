import { css } from 'styled-components';

import { FONT_STYLES } from '../../constants';
import { getColor, getFontStyle } from '../../utils.js';

const TypographyStyles = css`
  body {
    color: ${getColor('CHARCOAL', 800)};
    font-family: Graphik, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.42857;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    letter-spacing: -0.01em;
    font-weight: 500;
    color: ${getColor('CHARCOAL', 800)};
    margin: 0 0 20px;
  }

  h1 {
    ${getFontStyle(FONT_STYLES.H1)}
    margin-bottom: 30px;
  }

  h1.display {
    ${getFontStyle(FONT_STYLES.DISPLAY_L)}
  }

  h2 {
    ${getFontStyle(FONT_STYLES.H2)}
    margin-bottom: 20px;
  }

  h2.display {
    ${getFontStyle(FONT_STYLES.DISPLAY_M)}
  }

  h3 {
    ${getFontStyle(FONT_STYLES.H3)}
    margin: 20px 0 9px;
  }

  h3.display {
    ${getFontStyle(FONT_STYLES.DISPLAY_S)}
  }

  h4 {
    ${getFontStyle(FONT_STYLES.H4)}
    margin: 10px 0;
  }

  h4.display {
    ${getFontStyle(FONT_STYLES.DISPLAY_XS)}
  }

  h5 {
    ${getFontStyle(FONT_STYLES.H5)}
    margin: 10px 0;
  }

  h6 {
    ${getFontStyle(FONT_STYLES.H6)}
    margin: 10px 0;
  }

  p {
    ${getFontStyle(FONT_STYLES.TEXT_M)}
    margin: 0 0 10px;
  }

  strong {
    font-weight: 500;
  }

  em {
    font-style: italic;
  }

  .text-large {
    ${getFontStyle(FONT_STYLES.TEXT_L)}
  }

  small,
  .text-small {
    ${getFontStyle(FONT_STYLES.TEXT_S)}
  }

  input {
    font-size: 15px;
    line-height: 1.3;
  }

  button {
    font-family: Graphik, Helvetica, Arial, sans-serif;
    font-size: inherit;
    padding: 0;
    cursor: pointer;
  }

  a,
  button {
    color: ${getColor('BLUE', 600)};
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }
  
  a:focus,
  button:focus {
    outline: 0;
  }
  
  a:focus-visible,
  button:focus-visible {
    border-radius: 4px;
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${getColor('BLUE', 500)};
  }

  a:hover,
  button:hover {
    color: ${getColor('BLUE', 700)};
  }

  b,
  strong {
    -webkit-font-smoothing: auto;
  }

  ol,
  ul {
    margin: 0 0 10px;
  }

  hr {
    border: none;
    border-top: 1px solid ${getColor('ASH', 400)};
    margin: 0 0 30px;
  }
`;

export default TypographyStyles;
