import { css } from 'styled-components';

import {
  BREAKPOINTS,
  COLORS,
  FONT_STYLES_DATA,
} from './constants';

export const getColor = (colorName, intensity) => {
  try {
    if (COLORS[colorName][intensity]) return COLORS[colorName][intensity];
    throw new Error({ message: 'Color not found' });
  } catch (e) {
    console.error(e);
  }
};

export const getResponsiveFontSize = (min, max, important = false) =>
  min === max ?
    `font-size: ${max}px;` :
    css`
      font-size: ${min}px${important ? ' !important' : ''};

      @media (min-width: ${BREAKPOINTS.S}) {
        font-size: calc(${min}px + (${max} - ${min}) * ((100vw - ${BREAKPOINTS.S}) / (${BREAKPOINTS.XL.replace('px', '')} - ${BREAKPOINTS.S.replace('px', '')})))${important ? ' !important' : ''};
      }

      @media (min-width: ${BREAKPOINTS.XL}) {
        font-size: ${max}px${important ? ' !important' : ''};
      }
    `;

// Argument `fontStyle` needs to be one of the keys/values of constants/FONT_STYLES.
export const getFontStyle = fontStyleKey => {
  const FONT_STYLE = FONT_STYLES_DATA[fontStyleKey];
  if (!FONT_STYLE) {
    console.error(`Font style ${fontStyleKey} not found!`);
    return ``;
  }
  return css`
    ${getResponsiveFontSize(FONT_STYLE.min, FONT_STYLE.max)}
    ${FONT_STYLE.baseStyle}
  `;
}