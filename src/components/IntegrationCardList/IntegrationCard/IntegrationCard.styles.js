import styled, { css } from 'styled-components';


import { BREAKPOINTS } from '../../../constants';
import { getColor } from '../../../utils';



export const IntegrationCardDIV = styled.div`
  max-width:378px;
  width:30%;
  height:312px;
  position:relative;
  pointer-events:auto;
  background-color:#fff;
  text-align:center;
  border-radius:6px;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 5px 10px 0px rgba(7, 30, 87, 0.10);
  transition: transform 0.15s ease-in-out;
  overflow:hidden;
  &:hover {
      .btn-wrapper {
          background-color: ${getColor('ASH', 200)};
        } 
    }

/* extra small */
  @media (max-width: ${BREAKPOINTS.S}) {
    height:256px;
  }
    
/* small */
  @media (max-width: ${BREAKPOINTS.M}) {
    width:100%;
    max-width:100%;
    height:250px;
    margin-bottom:30px;
  }

  
/* large */
  @media (min-width: ${BREAKPOINTS.M}) {

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
    }

    &:hover::after {
      opacity: 1;
    } 
  }

`;

export const IntegrationCardContentDIV = styled.div`
  flex-grow:1;

  margin: 20px 36.5px 0 36.5px;
  @media (max-width: ${BREAKPOINTS.M}) {
    margin-top:10px;
  }

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


export const IntegrationCardImgWrapper = styled.div`
  width:184px;
  height:100px;
  margin:0 auto 10px auto;

  /* extra small */
  @media (max-width: ${BREAKPOINTS.S}) {
    height:60px;
    width:150px;
    margin-top:-10px;
  }

  /* small */
  @media (min-width: ${BREAKPOINTS.S}) {
    width:150px;
    height:80px;
    margin-top:-10px;
  }

  img {
    width:100%;
    height:auto;
  }

`;


export const IntegrationCardBtnWrapperDIV = styled.div`
  width:100%;
  height:58px;
  border-top: 1px solid ${getColor('ASH', 300)};
  @media (max-width: ${BREAKPOINTS.M}) {
    margin-top:10px;
  }
`;

export const IntegrationCardBtn = styled.a`
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

