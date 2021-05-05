import styled, { css } from 'styled-components';

import { ButtonA } from '../Button/Button.styles';

import WhiteBrushBG from '../../../static/images/components/GetStartedCallout/GetStartedCallout--default-brush-bg.png';

import { BREAKPOINTS } from '../../constants';
import { getColor, getColumnCSS, getRowCSS } from '../../utils';

import { GET_STARTED_CALLOUT_THEMES } from './GetStartedCallout.constants';

export const GetStartedCalloutContentWrapperDIV = styled.div`
  ${getRowCSS()}
`;

export const GetStartedCalloutContentDIV = styled.div`
  ${getColumnCSS({
    M: 8,
    L: 6,
    offsetM: 2,
    offsetL: 3, 
  })}


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

export const GetStartedCalloutDIV = styled.div`

   padding: 60px 0;


  @media (min-width: ${BREAKPOINTS.M}) {
    padding: 80px 0;
  }

  ${({ theme }) => {
    switch (theme) {
    
      case GET_STARTED_CALLOUT_THEMES.DEFAULT:
      case GET_STARTED_CALLOUT_THEMES.INDIGO:
        return css`
          position: relative;
          background: ${getColor('BLUE', 100)} url(${WhiteBrushBG}) bottom center no-repeat;
          text-align:center;
        
          ${GetStartedCalloutContentWrapperDIV} {
            position: relative;
            z-index: 1;
          }

          .brush {
            position: absolute !important;
            z-index: 0;
            width: 50%;
            height: 100%;
            max-width: 550px;

            &.brush-top-right {
              top: 0;
              right: 0;
            }

            &.brush-bottom-left {
              bottom: 0;
              left: 0;
            }
          }
        `;

        case GET_STARTED_CALLOUT_THEMES.ILLO:
          return css`
          position: relative;
          background: 'none';
          text-align:left;

          ${GetStartedCalloutContentWrapperDIV} {
            z-index: 1;
            margin-top:40px;
          }

          ${GetStartedCalloutContentDIV} {
            ${getColumnCSS({
              M: 8,
              L: 6,
              offsetM: 1,
              offsetL: 1, 
            })}
          }



          .museum {
            position: absolute !important;
            z-index: -1;
           
            &.museum-top-left {
              top: 0;
              left: 0;
              width:25%;
            }

            &.museum-bottom-right {
              bottom: 0;
              right: 0;
              width: 50%;
            }
          }
        `;

      default:
        return '';
    }
  }}
`;
