import React from 'react';
import styled from 'styled-components';

import { getColor } from '../../../utils';

import FooterLogo from '../FooterLogo/FooterLogo';

const TaglineColumnDIV = styled.div`
  flex: 0 0 100%;
  margin-bottom: 40px;
  padding-bottom: 40px;
  padding: 0 15px;
  text-align: center;

  @media (min-width: 992px) {
    border-bottom: none;
    flex: 0 0 25%;
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: left;
  }

  .logo {
    display: inline-block;
    margin: -3px 0 11px;
  }

  .logo:focus-visible {
    background: #253642;
    border-radius: 4px;
    box-shadow:
      0 0 0 2px ${getColor('CHARCOAL', 800)},
      0 0 0 4px ${getColor('BLUE', 100)};
  }

  svg {
    height: 30px;
    width: 25px;
  }

  h3 {
    color: white;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    padding: 0 0 40px;
    border-bottom: 1px solid #405261;

    @media (min-width: 769px) {
      padding-right: 12px;
    }

    @media (min-width: 992px) {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

const TaglineColumn = () => (
  <TaglineColumnDIV>
    <a className="logo" href="/" aria-label="Return to Home Page"><FooterLogo /></a>
    <h3>Tools for the world's most customer-centric businesses</h3>
  </TaglineColumnDIV>
);

export default TaglineColumn;
