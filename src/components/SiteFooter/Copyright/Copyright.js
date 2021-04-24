import React from 'react';
import styled from 'styled-components';

import MadeByImage from '../images/made-by.png';

const CopyrightDIV = styled.div`
  font-size: 14px;
  text-align: center;

  strong,
  span {
    display: block;
  }

  strong {
    color: white;
    margin: 0 0 20px;
  }

  img {
    width: 50px;
    height: auto;
    opacity: 0.5;
  }

  span {
    color: #93A1B0;
  }

  @media (min-width: 992px) {
    strong,
    span {
      display: inline-block;
    }

    strong {
      margin: 0 8px 0 0;
    }
  }
`;

const Copyright = () => (
  <CopyrightDIV>
    <strong><img src={MadeByImage} alt="Squiggle" /> Made by hand in over 75 cities around the world.</strong>
    <span>© {(new Date()).getFullYear()} Help Scout</span>
  </CopyrightDIV>
);

export default Copyright;
