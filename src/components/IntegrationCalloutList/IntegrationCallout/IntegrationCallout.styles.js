import styled, { css } from 'styled-components';


import { BREAKPOINTS } from '../../../constants';
import { getColor } from '../../../utils';



export const IntegrationCalloutDIV = styled.div`
  width:378px;
  height:auto;
  position:relative;
  pointer-events:auto;
  background-color:#fff;
  border-radius:6px;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 5px 10px 0px rgba(7, 30, 87, 0.10);
  transition: transform 0.15s ease-in-out;

  /* darker drop shadow to be revealed on hover */
  &::after {
      opacity: 0;
      position:absolute;
      border-radius:6px;
      top:0;
      width:100%;
      height:100%;
      content:'';
      background-color:(0,0,0,0.0);
      box-shadow: 0px 20px 30px 0px rgba(7, 30, 87, 0.20);
      transition: opacity 0.15s cubic-bezier(0.87, 0, 0.13, 1);
      pointer-events:none;
    }

   &:hover {
    transform:translateY(-1%) scale(1.05);

     .btn-wrapper {
      background-color: ${getColor('ASH', 200)};
    } 
  }

  &:hover::after {
    opacity: 1;
  } 
`;

export const IntegrationCalloutContentDIV = styled.div`
  margin: 20px 36.5px 0 36.5px;
`;

export const PillWrapperDIV = styled.div`
  display:flex;
  justify-content:flex-end;
`;

export const PillSPAN = styled.span`
  width:auto;
  color:#ffffff;
  border-radius:2px;
  padding:3px 4px;
  background-color: ${getColor('PURPLE', 700)}
`;  


export const IntegrationCalloutImgWrapper = styled.div`
  width:184px;
  height:100px;
  margin:0 auto 10px auto;

  img {
    width:100%;
    height:auto;
  }

`;


export const IntegrationCalloutBtnWrapperDIV = styled.div`
  width:100%;
  height:100%;
  margin-top:40px;
  flex-grow:1;
  border-top: 1px solid ${getColor('ASH', 300)};
`;

export const IntegrationCalloutBtn = styled.a`
    font-size: 18px;
    line-height: 18px;
    font-weight:500;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;

     /* Caret-right */
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

