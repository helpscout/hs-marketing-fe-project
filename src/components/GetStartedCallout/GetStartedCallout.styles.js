import styled, { css, keyframes  } from 'styled-components';

import { ButtonA } from '../Button/Button.styles';

import WhiteBrushBG from '../../../static/images/components/GetStartedCallout/GetStartedCallout--default-brush-bg.png';

import { BREAKPOINTS } from '../../constants';
import { getColor, getColumnCSS, getRowCSS } from '../../utils';

import { GET_STARTED_CALLOUT_THEMES } from './GetStartedCallout.constants';


const animateCloud = keyframes`
  0% {
    margin-left: -100px;
    }
  100% {
      margin-left: 100%;
  }
`

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

export const GetStartedCalloutDIV = styled.div`
  
  ${({ theme }) => {
    switch (theme) {
      case GET_STARTED_CALLOUT_THEMES.INDIGO:
        return css`
          position: relative;
          background: linear-gradient(180deg, #F7F9FD 0%, rgba(247, 249, 253, 0) 100%);
          background: ${getColor('BLUE', 100)} url(${WhiteBrushBG}) bottom center no-repeat;
          padding: 60px 0;

          @media (min-width: ${BREAKPOINTS.M}) {
            padding: 80px 0;
          }

          ${GetStartedCalloutContentWrapperDIV} {
            position: relative;
            z-index: 1;
          }
          ${GetStartedCalloutContentWrapperDIV} {
            text-align: left;
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
            background: white none repeat scroll 0% 0%;
            padding: 0;
            overflow: hidden;

            ${GetStartedCalloutContentWrapperDIV} {
              position: relative;
              z-index: 1;
              padding: 90px 0px calc(60vw);
            
             @media (min-width: ${BREAKPOINTS.M}) {
                padding-top: 150px;
              }
              @media (min-width: ${BREAKPOINTS.S}) {
                padding-bottom: 300px;
              }
            }

            ${GetStartedCalloutContentDIV} {
              ${getColumnCSS({
              M: 6,
              L: 6,
              offsetM: 1,
              offsetL: 2,
            })}
              text-align: left;
            }
            .illo {
              position: absolute !important;
              z-index: 0;
              width: 100%;

              &.illo-top-right {
                top: 0;
                right: 0;
              }

              &.illo-bottom-left {
                bottom: 0;
                left: 0;
              }
            }

            .illo--clouds {
              top: 30px;
              left: 40px;
              max-width: 165px;
              animation: ${animateCloud} 35s linear infinite;
              @media (min-width: ${BREAKPOINTS.M}) {
                max-width: 300px;
              }
            }
            .illo--clouds--2 {
              top: 0px;
              left: 100px;
              max-width: 100px;
              animation: ${animateCloud} 20s linear infinite;
              @media (min-width: ${BREAKPOINTS.M}) {
                max-width: 200px;
              }
            }

            .illo--sculpture {
              width: 50%;
              max-width: 500px;
              bottom: 0px;
              right: 0px;

              @media (min-width: ${BREAKPOINTS.L}) {
                width: 50%;
                max-width: 785px;
              }
            }
          `;

      default:
        return '';
    }

  }}
`;
