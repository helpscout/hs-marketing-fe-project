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

   ${({ noBg }) => {
     if (noBg) return css`
        background:'none';
     `
    return css`
       background: ${getColor('BLUE', 100)} url(${WhiteBrushBG}) bottom center no-repeat;
     `
    }}
   
   padding: 60px 0;

   text-align: ${props => props.contentAlignment};
    border:solid red 1px;

  @media (min-width: ${BREAKPOINTS.M}) {
    padding: 80px 0;
  }

  ${({ theme }) => {
    switch (theme) {
      case GET_STARTED_CALLOUT_THEMES.INDIGO:
        return css`
          position: relative;
          background: linear-gradient(180deg, #F7F9FD 0%, rgba(247, 249, 253, 0) 100%);

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

      default:
        return '';
    }
  }}
`;
