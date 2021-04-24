import styled, { css, keyframes } from 'styled-components';

const KeyframesNavSlideIn = keyframes`
  0% {
      transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`

export const SiteHeaderDIV = styled.div`
  position: relative;
  z-index: 9;
  min-height: 90px;
`;

export const SiteHeaderHEADER = styled.header`
  min-height: 90px;

  ${({ isFixed }) => isFixed && css`
    animation-duration: 0.35s;
    animation-name: ${KeyframesNavSlideIn};
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: white;
    box-shadow: 0 10px 30px 0px rgba(25, 45, 100, 0.08);
    min-height: 90px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  `}
`;

export const SiteNavWrapperDIV = styled.div`
  position: relative;
  z-index: 2;
`;
