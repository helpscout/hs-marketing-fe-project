import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { getColor } from '../../../utils';

import LogoSVG from '../../../../static/images/nav/logo-color.svg';

export const HeaderLogoLINK = styled(Link)`
  display: block;
  height: 45px;
  margin: 0 25px 0 0;
  padding: 5px 0 10px;
  width: 152px;
  background: 0 5px / 100% auto no-repeat url(${LogoSVG});

  &:focus-visible {
    border-radius: 4px;
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${getColor('BLUE', 100)};
  }
`;

const HeaderLogo = () => (
  <HeaderLogoLINK
    aria-label="Navigate To Home Page"
    to="/"
  />
);

export default HeaderLogo;
