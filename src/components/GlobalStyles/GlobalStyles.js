import React from 'react';
import {createGlobalStyle } from 'styled-components';

import Fonts from './Fonts/Fonts';

import ResetStyles from './_reset';
import TypographyStyles from './_typography';
import FormsStyles from './_forms';

const GlobalStylesComponent = createGlobalStyle`
  ${ResetStyles}
  ${TypographyStyles}
  ${FormsStyles}
`;

const GlobalStyles = React.memo(() => (
  <>
    <Fonts />
    <GlobalStylesComponent />
  </>
), () => false);

export default GlobalStyles;
