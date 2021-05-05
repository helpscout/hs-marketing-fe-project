import styled, { css } from 'styled-components';


import { BREAKPOINTS } from '../../../constants';
import { getColor, getColumnCSS, getRowCSS } from '../../../utils';


export const IntegrationCalloutDIV = styled.div`
  background-color:#fff;
  width:378px;
  height:312px;
  display:flex;
  flex-direction:column;
  border-radius:6px;
  box-shadow: 0px 5px 10px 0px rgba(7, 30, 87, 0.10);
`;

export const IntegrationCalloutContentDIV = styled.div`
  margin: 30px 36.5px 0 36.5px;
`;


export const IntegrationCalloutBtnWrapperDIV = styled.div`
  width:100%;
  height:auto;
  flex-grow:1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${getColor('ASH', 300)};
  cursor:pointer;

  &:hover {
      background-color: ${getColor('ASH', 200)};
    }
`;

export const IntegrationCalloutBtn = styled.a`
     font-size: 18px;
     line-height: 18px;
     font-weight:500;

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

export const PillSPAN = styled.span`
  width:auto;
  color:#ffffff;
  border-radius:2px;
  padding:3px 4px;
  background-color: ${getColor('PURPLE', 700)}
`;  
