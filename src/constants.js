export const BREAKPOINTS = {
  S: '430px',
  M: '769px',
  L: '992px',
  XL: '1200px'
};

export const FONT_STYLE_BASE_HEADING = `
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: 500;
`;

export const FONT_STYLE_BASE_DISPLAY = `
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: 600;
`;

export const FONT_STYLE_BASE_TEXT = `
  line-height: 1.8;
  letter-spacing: -0.005em;
`

export const FONT_STYLE_BASE_BLOCKQUOTE = `
  line-height: 1.6;
  letter-spacing: -0.01em;
  font-weight: 400;
`

export const FONT_STYLE_BASE_OVERLINE = `
  line-height: 1.4;
  letter-spacing: 0.07em;
  font-weight: 500;
  text-transform: uppercase;
`

export const ALIGNMENT = `
  LEFT: 'LEFT',
  CENTER: 'CENTER',
  RIGHT: 'RIGHT',
`

export const FONT_STYLES = {
  DISPLAY_L: 'DISPLAY_L',
  DISPLAY_M: 'DISPLAY_M',
  DISPLAY_S: 'DISPLAY_S',
  DISPLAY_XS: 'DISPLAY_XS',
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
  TEXT_L: 'TEXT_L',
  TEXT_M: 'TEXT_M',
  TEXT_S: 'TEXT_S',
  TEXT_XS: 'TEXT_XS',
  BLOCKQUOTE_L: 'BLOCKQUOTE_L',
  BLOCKQUOTE_M: 'BLOCKQUOTE_M',
  BLOCKQUOTE_S: 'BLOCKQUOTE_S',
  BLOCKQUOTE_XS: 'BLOCKQUOTE_XS',
  OVERLINE_L: 'OVERLINE_L',
  OVERLINE_M: 'OVERLINE_M',
  OVERLINE_S: 'OVERLINE_S',
  OVERLINE_XS: 'OVERLINE_XS',
}

export const FONT_STYLES_DATA = {
  DISPLAY_L: {
    min: 36,
    max: 60,
    baseStyle: FONT_STYLE_BASE_DISPLAY,
  },
  DISPLAY_M: {
    min: 30,
    max: 48,
    baseStyle: FONT_STYLE_BASE_DISPLAY,
  },
  DISPLAY_S: {
    min: 24,
    max: 36,
    baseStyle: FONT_STYLE_BASE_DISPLAY,
  },
  DISPLAY_XS: {
    min: 21,
    max: 30,
    baseStyle: FONT_STYLE_BASE_DISPLAY,
  },
  H1: {
    min: 30,
    max: 48,
    baseStyle: FONT_STYLE_BASE_HEADING,
  },
  H2: {
    min: 24,
    max: 36,
    baseStyle: FONT_STYLE_BASE_HEADING,
  },
  H3: {
    min: 21,
    max: 30,
    baseStyle: FONT_STYLE_BASE_HEADING,
  },
  H4: {
    min: 18,
    max: 24,
    baseStyle: FONT_STYLE_BASE_HEADING,
  },
  H5: {
    min: 18,
    max: 21,
    baseStyle: FONT_STYLE_BASE_HEADING,
  },
  H6: {
    min: 16,
    max: 18,
    baseStyle: FONT_STYLE_BASE_HEADING,
  },
  TEXT_L: {
    min: 18,
    max: 21,
    baseStyle: FONT_STYLE_BASE_TEXT,
  },
  TEXT_M: {
    min: 16,
    max: 18,
    baseStyle: FONT_STYLE_BASE_TEXT,
  },
  TEXT_S: {
    min: 15,
    max: 15,
    baseStyle: FONT_STYLE_BASE_TEXT,
  },
  TEXT_XS: {
    min: 13,
    max: 13,
    baseStyle: FONT_STYLE_BASE_TEXT,
  },
  BLOCKQUOTE_L: {
    min: 30,
    max: 36,
    baseStyle: FONT_STYLE_BASE_BLOCKQUOTE,
  },
  BLOCKQUOTE_M: {
    min: 24,
    max: 30,
    baseStyle: FONT_STYLE_BASE_BLOCKQUOTE,
  },
  BLOCKQUOTE_S: {
    min: 21,
    max: 24,
    baseStyle: FONT_STYLE_BASE_BLOCKQUOTE,
  },
  BLOCKQUOTE_XS: {
    min: 18,
    max: 21,
    baseStyle: FONT_STYLE_BASE_BLOCKQUOTE,
  },
  OVERLINE_L: {
    min: 16,
    max: 18,
    baseStyle: FONT_STYLE_BASE_OVERLINE,
  },
  OVERLINE_M: {
    min: 15,
    max: 15,
    baseStyle: FONT_STYLE_BASE_OVERLINE,
  },
  OVERLINE_S: {
    min: 12,
    max: 12,
    baseStyle: FONT_STYLE_BASE_OVERLINE,
  },
  OVERLINE_XS: {
    min: 10,
    max: 10,
    baseStyle: FONT_STYLE_BASE_OVERLINE,
  },
};

export const COLORS = {
  ASH: {
    100: '#FCFCFE',
    200: '#F9FAFA',
    300: '#F1F3F5',
    400: '#E5E9EC',
    500: '#D5DCE1',
    600: '#C5CED6',
    700: '#B7C2CC',
    800: '#A5B2BD'
  },
  BLUE: {
    100: '#F3FBFF',
    200: '#D6EDFF',
    300: '#A0D4FF',
    400: '#57B0FB',
    500: '#1292EE',
    600: '#0077CC',
    700: '#005CA4',
    800: '#034077',
    900: '#002651'
  },
  CHARCOAL: {
    200: '#93A1B0',
    300: '#748494',
    400: '#556575',
    500: '#405261',
    600: '#314351',
    700: '#253642',
    800: '#1d2b36',
  },
  GOLD: {
    100: '#FFF9EF',
    200: '#FFF2D7',
    300: '#FFE7B8',
    400: '#FDD88E',
    500: '#FFC555',
    600: '#FAB347',
    700: '#E89635',
    800: '#CE7129',
    900: '#B24319',
  },
  GREEN: {
    100: '#F5FFF9',
    200: '#E3fBEE',
    300: '#C2F0D7',
    400: '#87DBAE',
    500: '#56C288',
    600: '#39AC6E',
    700: '#268C55',
    800: '#106236',
    900: '#003C1C',
  },
  INDIGO: {
    100: '#F2F6FF',
    200: '#DFE7FF',
    300: '#B2C8FB',
    400: '#79A1F8',
    500: '#527CEB',
    600: '#3B64D2',
    700: '#2549A8',
    800: '#16337F',
    900: '#071E57'
  },
  PURPLE: {
    100: '#F9F9FF',
    200: '#EBECFF',
    300: '#D9DCFD',
    400: '#B9BEFF',
    500: '#9FA6FF',
    600: '#818AEC',
    700: '#6269C5',
    800: '#404996',
    900: '#232A5C'
  },
  PINK: {
    100: '#FFF9FB',
    200: '#FFEEF1',
    300: '#FFE1E7',
    400: '#FFCCD7',
    500: '#FFB3C3',
    600: '#FD9AAE',
    700: '#FF819A',
    800: '#FC5D7D',
    900: '#F23459',
  },
  WHALETAIL: {
    100: '#F3F7FF',
    200: '#E5EDFE',
    300: '#D0DEFD',
    400: '#AFC7F9',
    500: '#8AABF1',
    600: '#7296E1',
    700: '#5174BB',
    800: '#304F8B',
    900: '#142F5E'
  }
};
