import styled, { keyframes } from 'styled-components';

import { getColor } from '../../../../utils';

import { ButtonA } from '../../../Button/Button';

const FadeInKeyframes = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const MobileNavOverlayDIV = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  animation: ${FadeInKeyframes} 0.3s forwards;
`;

export const MobileNavDIV = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileNavBUTTON = styled.button`
  background: transparent;
  border: none;
  outline: 0;

  svg {
    color: #556575;
  }
`;

export const MobileNavCloseBUTTON = styled(MobileNavBUTTON)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 24px;
  z-index: 2;
`;

export const MobileNavMenuDIV = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 5px 25px 0 rgba(0, 0, 0, 0.15),
    0 3px 3px 0 rgba(0, 0, 0, 0.05);
  z-index: 2;
`;

export const MobileNavMenuPrimaryUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const MobileNavMenuSecondaryDIV = styled.div`
  border-top: 1px solid ${getColor('ASH', 300)};
  padding: 24px 20px 18px;

  ${ButtonA} {
    margin-top: 10px;
    background: #0077CC;
  }
`;

export const MobileNavMenuSecondaryUL = styled(MobileNavMenuPrimaryUL)`
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 50%;
    margin-bottom: 18px;
    
    a {
      display: block;
      font-size: 15px;
      line-height: 1.4;
      padding: 0;
      transition: color 0.15s ease-in-out;

      @media (min-width: 430px) {
        font-size: 16px;
      }
    }
  }
`;

export const MobileNavLoginP = styled.p`
  margin: 20px 0 0;
  font-size: 16px;
  color: #748494;

  a {
    font-weight: 500;
  }
`;
