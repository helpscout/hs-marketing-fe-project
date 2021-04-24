import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants';

export const ContainerDIV = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 15px;

  @media (max-width: ${BREAKPOINTS.L}) {
    max-width: 90%;
  }

  @media (max-width: 1348px) {
    max-width: 95%;
  }
`;

const Container = ({ children, style }) => (
  <ContainerDIV style={style}>
    {children}
  </ContainerDIV>
);

export default Container;
