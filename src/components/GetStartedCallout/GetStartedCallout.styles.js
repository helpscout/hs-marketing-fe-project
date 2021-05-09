import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '../../constants';
import { GET_STARTED_CALLOUT_THEMES } from './GetStartedCallout.constants';

import { ButtonA } from '../Button/Button.styles';
import WhiteBrushBG from '../../../static/images/components/GetStartedCallout/GetStartedCallout--default-brush-bg.png';



import { getColor, getColumnCSS, getRowCSS } from '../../utils';

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
  background: ${getColor('BLUE', 100)} url(${WhiteBrushBG}) bottom center no-repeat;
  padding: 60px 0;

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
      
        case GET_STARTED_CALLOUT_THEMES.ILLO:
          return css`
            position: relative;
            background: #ffffff none;
            padding: 100px 0 0;

            @media (min-width: ${BREAKPOINTS.M}){
              padding: 180px 0;
            }
  
            ${GetStartedCalloutContentWrapperDIV} {
              position: relative;
              z-index: 1;
            }

            ${GetStartedCalloutContentDIV} {
              text-align: left;
              ${getColumnCSS({
                M: 6,
                L: 6,
                offsetM: 2,
                offsetL: 1,
              })}
            }
  
            .museum {
              z-index: 0;
              width: 100%;
              transition: all 0.25s ease 0s;
  
              &.museum-top-left {
                position: absolute;
                top: 20px;
                left: 25px;
                width: 175px;
                height: auto;
                @media (min-width: ${BREAKPOINTS.S}){
                  left: 45px;
                }
                @media (min-width: ${BREAKPOINTS.M}){
                  width: 330px;
                  top: 30px;
                  left: 40px;
                }
              }
  
              &.museum-bottom-right {
                position: relative;
                display: block;
                margin-left: auto;
                bottom: 0;
                right: 0;
                @media (min-width: ${BREAKPOINTS.S}){
                  /* width: 60%; uncomment if you want to resize depending on the broswer width */ 
                  max-width: 460px;
                }
                @media (min-width: ${BREAKPOINTS.M}){
                  position: absolute;
                  width:50%;
                  max-width: 785px;
                }
              }
            }
          `;

      default:
        return '';
    }
  }}
`;
