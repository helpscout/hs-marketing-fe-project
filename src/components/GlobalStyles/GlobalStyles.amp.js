import React from 'react';
import { css } from 'styled-components';
import { Helmet } from 'react-helmet';

import { getColor } from '../../utils';

const GlobalStylesAMPCSS = css`
  html,
  body {
    margin: 0;
    background: linear-gradient(180deg, #F9F9FF 20.69%, rgba(249, 249, 255, 0) 100%);
    color: ${getColor('CHARCOAL', 500)};
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 105%;
    line-height: 1.6;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    
  }

  h1, h2, h3, h4, h5 {
    color: ${getColor('CHARCOAL', 800)}};
    line-height: 1.1;
  }

  h1, h2, h3 {
    font-weight: 600;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 15px;
    text-align: center;
  }
  
  h2, h3 {
    margin: 1.8em 0 0.8em;
  }

  header {
    margin: 0 0 1.25em;
    text-align: center;
  }

  .header-meta {
    display: block;
    color: #93A1AF;
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  .header-meta span {
    padding: 0 5px;
  }

  p {
    margin: 0 0 1.5rem;
  }

  p:first-child {
    font-size: 1.32rem;
    line-height: 1.4;
  }

  a {
    color: #222;
    border: none;
  }

  a:hover {
    color: ${getColor('BLUE', 500)};
  }

  blockquote {
    border-left: 2px solid #C1CBD4;
    margin: 2em 0;
    padding-left: 24px;
  }

  hr {
    background-color: ${getColor('ASH', 400)};
    border: none;
    height: 1px;
    margin: 1.5rem 0;
    padding: 0;
  }

  .hero-image {
    max-width: 630px;
    margin: 0 -15px 1.5em;
  }

  amp-img, img {
    display: block;
    height: auto;
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  table {
    border-collapse: collapse;
    margin: 20px 0;
    text-align: left;
  }

  td,
  th {
    border: 1px solid #93A1AF; /* charcoal 200 */
    line-height: 1.4;
    padding: 8px 16px;
    vertical-align: top;
  }
`;

const GlobalStylesAMP = React.memo(() => (
  <Helmet>
    <style>{GlobalStylesAMPCSS.join(' ')}</style>
  </Helmet>
), () => false);

export default GlobalStylesAMP;
