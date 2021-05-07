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
  text-align: center;
  @media (max-width: ${BREAKPOINTS.L}) {
    height: 561px;  
  }
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
  background: ${getColor('BLUE', 100)} url(${WhiteBrushBG}) bottom center no-repeat;
  padding: 60px 0;
  padding-bottom:0px;
  @media (min-width: ${BREAKPOINTS.M}) {
    padding: 80px 0;
  }

  ${({ theme }) => {
    switch (theme) {

      case "INDIGO":
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

        // NEW THEME 
        case "NEW":
          return css`
          position: relative;
          background: none;
          
          @media (min-width: ${BREAKPOINTS.M}) {
            padding: 120px 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: -33px -84px;
            margin-right: -10px;
          }
          ${GetStartedCalloutContentWrapperDIV} {
            position: relative;
            z-index: 1;
            @media (max-width: ${BREAKPOINTS.M}) {
              margin-left: -30px;
              margin-right: -40px;
            }
            @media(min-width: ${BREAKPOINTS.M}){
              margin-left: -180px;
              width: 1270px;
            }
            div{
              text-align:left;
              @media (max-width: ${BREAKPOINTS.M}) {
                display:block;
                
              }
            }
          }

          .cloud {
            position: absolute !important;
            z-index: 0;
            width: 330px;
            height: 110px;
            @media (max-width: ${BREAKPOINTS.M}) {
              width: 175px;
              height: 58px;
              
            }

            &.cloud-top-left {
              top: 29px;
              left: 38px;
              @media (max-width: ${BREAKPOINTS.M}) {
                top: -41px;
                left: -7px;

              }
            }
          }
          .hill {
            position: absolute !important;
            z-index: 0;
            width: 50%;
            height: 100%;
            
            @media (max-width: ${BREAKPOINTS.M}) {
              width: 379px;
              height: 229px;
            }
            @media (min-width: ${BREAKPOINTS.M}) and (max-width: ${BREAKPOINTS.L})  {
              width: 379px;
              height: 229px;
            }

            @media(min-width: ${BREAKPOINTS.L}){
              width: 785px;
              height: 491px;
            }
            
            &.hill-bottom-right {
              top: -33px;
              right: 0;
              @media (max-width: ${BREAKPOINTS.M}) {
                top: 392px;
                right: -30px;
              }
              @media (min-width: ${BREAKPOINTS.M}) and (max-width: ${BREAKPOINTS.L})  {
                top: 282px;
                right: -21px;
              }
              @media(min-width: ${BREAKPOINTS.M}){
                width: 785px;
                height: 491px;
              }
            }
          }
        `;

      default:
        return '';
    }
  }}
`;
