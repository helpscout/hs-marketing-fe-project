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

export const getRowCSS = () => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

// Get column width as a %
// Based on our 12-column grid
export const getColumnPercentWidth = numberOfColumns => (100 / 12 * numberOfColumns).toPrecision(6);

export const getColumnCSS = ({
  XS = null,
  S = null,
  M = null,
  L = null,
  XL = null,
  offsetXS = null,
  offsetS = null,
  offsetM = null,
  offsetL = null,
  offsetXL = null,
}) => css`
  padding: 0 15px;
  /* XS/default */
  ${XS !== null ? `flex: 0 0 ${getColumnPercentWidth(XS)}%;` : `flex: 0 0 100%;`}
  ${offsetXS !== null ? `margin-left: ${getColumnPercentWidth(offsetXS)}%;` : ''}

  /* Small */
  ${S !== null ? `
    @media (min-width: ${BREAKPOINTS.S}) {
      flex: 0 0 ${getColumnPercentWidth(S)}%;
      width: ${getColumnPercentWidth(S)}%;
    }
  ` : ''}

  ${offsetS !== null ? `
    @media (min-width: ${BREAKPOINTS.S}) {
      margin-left: ${getColumnPercentWidth(offsetS)}%;
    }
  ` : ''}

  /* Medium */
  ${M !== null ? `
    @media (min-width: ${BREAKPOINTS.M}) {
      flex: 0 0 ${getColumnPercentWidth(M)}%;
      width: ${getColumnPercentWidth(M)}%;
    }
  ` : ''}

  ${offsetM !== null ? `
    @media (min-width: ${BREAKPOINTS.M}) {
      margin-left: ${getColumnPercentWidth(offsetM)}%;
    }
  ` : ''}

  /* Large */
  ${L !== null ? `
    @media (min-width: ${BREAKPOINTS.L}) {
      flex: 0 0 ${getColumnPercentWidth(L)}%;
      width: ${getColumnPercentWidth(L)}%;
    }
  ` : ''}

  ${offsetL !== null ? `
    @media (min-width: ${BREAKPOINTS.L}) {
      margin-left: ${getColumnPercentWidth(offsetL)}%;
    }
  ` : ''}

  /* X-Large */
  ${XL !== null ? `
    @media (min-width: ${BREAKPOINTS.XL}) {
      flex: 0 0 ${getColumnPercentWidth(XL)}%;
      width: ${getColumnPercentWidth(XL)}%;
    }
  ` : ''}

  ${offsetXL !== null ? `
    @media (min-width: ${BREAKPOINTS.XL}) {
      margin-left: ${getColumnPercentWidth(offsetXL)}%;
    }
  ` : ''}
`;
