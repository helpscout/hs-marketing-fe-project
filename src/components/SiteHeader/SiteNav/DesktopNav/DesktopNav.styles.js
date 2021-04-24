import styled from 'styled-components';

export const DesktopNavDIV = styled.div`
  align-items: center;
  display: none;
  flex: 1;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const SiteNavUL = styled.ul`
  padding: 0;
  margin: 0;
`;
