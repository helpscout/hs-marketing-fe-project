import React from 'react';
import styled, { css } from 'styled-components';

import { FONT_STYLES } from '../../constants';
import { getColor, getFontStyle } from '../../utils';

export const BADGE_COLORS = {
  ASH: 'ASH',
  BLUE: 'BLUE',
  CHARCOAL: 'CHARCOAL',
  DEFAULT: 'CHARCOAL',
  GOLD: 'GOLD',
  INDIGO: 'INDIGO',
  PURPLE: 'PURPLE',
};

export const BadgeSPAN = styled.span`
  ${getFontStyle(FONT_STYLES.OVERLINE_S)}
  border-radius: 2px;
  color: white;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  padding: 3px 5px 4px;
  text-transform: uppercase;
  vertical-align: middle;

  ${({ color }) => {
    switch (color) {
      case BADGE_COLORS.ASH:
        return css`
          background-color: ${getColor('ASH', 300)};
          color: ${getColor('CHARCOAL', 400)};
        `;

      case BADGE_COLORS.BLUE:
        return css`
          background-color: ${getColor('BLUE', 700)};
          color: white;
        `;

      case BADGE_COLORS.INDIGO:
        return css`
          background-color: ${getColor('INDIGO', 600)};
          color: white;
        `;

      case BADGE_COLORS.PURPLE:
        return css`
          background-color: ${getColor('PURPLE', 700)};
          color: white;
        `;

      case BADGE_COLORS.GOLD:
        return css`
          background-color: ${getColor('GOLD', 600)};
          color: white;
        `;

      // Default: CHARCOAL
      default:
        return css`
          background-color: ${getColor('CHARCOAL', 600)};
          color: white;
        `;
    }
  }}
`;

const Badge = ({ children, color, className }) => (
  <BadgeSPAN className={className} color={color}>{children}</BadgeSPAN>
);

export default Badge;
