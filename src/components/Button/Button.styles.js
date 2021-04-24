import styled, { css } from 'styled-components';

import { getColor } from '../../utils';

import { BUTTON_COLORS, BUTTON_SIZES } from './Button.constants';

export const BUTTON_COLORS_CSS = {
  [BUTTON_COLORS.TRANSPARENT]: css`
    background: transparent;
    color: ${getColor('CHARCOAL', 500)};
    font-weight: 400;

    &:hover {
      color: ${getColor('CHARCOAL', 700)};
    }

    &:focus {
      background: ${getColor('BLUE', 100)};
    }
  `,
  [BUTTON_COLORS.ASH]: css`
    background-color: ${getColor('ASH', 200)};

    &:hover {
      background-color: ${getColor('ASH', 300)};
    }
  `,
  [BUTTON_COLORS.INDIGO]: css`
    background-color: ${getColor('INDIGO', 700)};
    color: white;

    &:hover {
      background-color: ${getColor('INDIGO', 800)};
    }
  `,
  // DEFAULT = `BLUE`
  DEFAULT: css`
    background-color: ${getColor('BLUE', 500)};
    color: white;

    &:hover {
      background-color: ${getColor('BLUE', 600)};
      color: white;
    }
  `,
}

export const BUTTON_SIZES_CSS = {
  [BUTTON_SIZES.L]: css`
    padding: 0 30px;
    line-height: 50px;
    height: 52px;
    font-size: 18px;
    border-radius: 4px;
  `,
  [BUTTON_SIZES.M]: css`
    padding: 0 20px;
    line-height: 46px;
    height: 46px;
    font-size: 15px;
    border-radius: 4px;
  `,
  [BUTTON_SIZES.XS]: css`
    padding: 0 10px;
    line-height: 30px;
    height: 32px;
    font-size: 13px;
    border-radius: 4px;
  `,
  // DEFAULT = `S`
  DEFAULT: css`
    padding: 0 20px;
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
  `,
};

export const ButtonA = styled.a`
  && {
    -webkit-appearance: none;
    border: 0;
    display: inline-block;
    font-weight: 500;
    outline: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(.455, .03, .515, .955);
    vertical-align: middle;

    &:focus-visible {
      border-radius: 4px;
      box-shadow:
        0 0 0 2px white,
        0 0 0 4px ${getColor('BLUE', 500)};
    }

    ${({ color }) => {
        if (BUTTON_COLORS_CSS[color]) {
          return BUTTON_COLORS_CSS[color];
        } else {
          return BUTTON_COLORS_CSS.DEFAULT;
        }
      }
    }}

    ${({ size }) => {
      if (BUTTON_SIZES_CSS[size]) {
        return BUTTON_SIZES_CSS[size];
      } else {
        return BUTTON_SIZES_CSS.DEFAULT;
      }
    }};

    ${({ fullwidth }) => fullwidth && css`
        display: block;
      width: 100%;
    `}
  }
`;
