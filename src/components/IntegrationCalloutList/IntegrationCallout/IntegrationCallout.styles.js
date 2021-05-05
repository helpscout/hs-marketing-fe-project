import styled, { css } from 'styled-components';

import { ButtonA } from '../../Button/Button.styles';


import { BREAKPOINTS } from '../../../constants';
import { getColor, getColumnCSS, getRowCSS } from '../../../utils';


export const IntegrationCalloutContentWrapperDIV = styled.div`
  ${getRowCSS()}
`;

export const IntegrationCalloutContentDIV = styled.div`
  ${getColumnCSS({
    M: 8,
    L: 6,
    offsetM: 2,
    offsetL: 3,
  })}
  text-align: center;

  p {
    color: ${getColor('CHARCOAL', 400)};

    &:last-child {
      color: ${getColor('CHARCOAL', 500)};

      a {
        display: inline-block;
      }
    }
  }

  ${ButtonA} {
    width: 100%;
    margin: 30px 0;

    @media (min-width: ${BREAKPOINTS.M}) {
      width: auto;
    }
  }
`;

export const IntegrationCalloutDIV = styled.div`
  background-color:#fff;
  padding: 60px 0;

  @media (min-width: ${BREAKPOINTS.M}) {
    padding: 80px 0;
  }

`;

export const IntegrationCalloutBtn = styled.a`
     /* Caret-down */
     &::after {
        border-top-width: 2px;
        border-top-style: solid;
        border-right-width: 2px;
        border-right-style: solid;
        content: "";
        display: inline-block;
        margin-left: 0.3em;
        position: relative;
        pointer-events: none;
        width: 6px;
        height: 6px;
        transform: rotate(40deg);
        transition: all 0.15s;
        vertical-align: middle;
        top: -1.5px;
        left: 2px;
      }
`;
