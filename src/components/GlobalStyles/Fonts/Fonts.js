import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'styled-components';

import BoldItalicWoff2 from '../../../../static/fonts/graphik/Graphik-BoldItalic-Web.woff2';
import BoldItalicWoff from '../../../../static/fonts/graphik/Graphik-BoldItalic-Web.woff';

import BoldWoff2 from '../../../../static/fonts/graphik/Graphik-Bold-Web.woff2';
import BoldWoff from '../../../../static/fonts/graphik/Graphik-BoldItalic-Web.woff';

import SemiboldItalicWoff2 from '../../../../static/fonts/graphik/Graphik-SemiboldItalic-Web.woff2';
import SemiboldItalicWoff from '../../../../static/fonts/graphik/Graphik-SemiboldItalic-Web.woff';

import SemiboldWoff2 from '../../../../static/fonts/graphik/Graphik-Semibold-Web.woff2';
import SemiboldWoff from '../../../../static/fonts/graphik/Graphik-Semibold-Web.woff';

import MediumItalicWoff2 from '../../../../static/fonts/graphik/Graphik-MediumItalic-Web.woff2';
import MediumItalicWoff from '../../../../static/fonts/graphik/Graphik-MediumItalic-Web.woff';

import MediumWoff2 from '../../../../static/fonts/graphik/Graphik-Medium-Web.woff2';
import MediumWoff from '../../../../static/fonts/graphik/Graphik-Medium-Web.woff';

import RegularItalicWoff2 from '../../../../static/fonts/graphik/Graphik-RegularItalic-Web.woff2';
import RegularItalicWoff from '../../../../static/fonts/graphik/Graphik-RegularItalic-Web.woff';

import RegularWoff2 from '../../../../static/fonts/graphik/Graphik-Regular-Web.woff2';
import RegularWoff from '../../../../static/fonts/graphik/Graphik-Regular-Web.woff';

import LightItalicWoff2 from '../../../../static/fonts/graphik/Graphik-LightItalic-Web.woff2';
import LightItalicWoff from '../../../../static/fonts/graphik/Graphik-LightItalic-Web.woff';

import LightWoff2 from '../../../../static/fonts/graphik/Graphik-Light-Web.woff2';
import LightWoff from '../../../../static/fonts/graphik/Graphik-Light-Web.woff';

const FontsCSS = css`
  @font-face {
    font-family: Graphik;
    src: 
      url(${BoldItalicWoff2}) format('woff2'),
      url(${BoldItalicWoff}) format('woff');
    font-weight: 700;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src: 
      url(${BoldWoff2}) format('woff2'),
      url(${BoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src: 
      url(${SemiboldItalicWoff2}) format('woff2'),
      url(${SemiboldItalicWoff}) format('woff');
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${SemiboldWoff2}) format('woff2'),
      url(${SemiboldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${MediumItalicWoff2}) format('woff2'),
      url(${MediumItalicWoff}) format('woff');
    font-weight: 500;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${MediumWoff2}) format('woff2'),
      url(${MediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${RegularItalicWoff2}) format('woff2'),
      url(${RegularItalicWoff}) format('woff');
    font-weight: 400;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${RegularWoff2}) format('woff2'),
      url(${RegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${LightItalicWoff2}) format('woff2'),
      url(${LightItalicWoff}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Graphik;
    src:
      url(${LightWoff2}) format('woff2'),
      url(${LightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }
`;

const Fonts = () => (
  <Helmet>
    <link rel="preload" href={MediumWoff2} as="font" type="font/woff2" crossOrigin="" />
    <link rel="preload" href={RegularWoff2} as="font" type="font/woff2" crossOrigin="" />
    <style>{FontsCSS.join(' ')}</style>
  </Helmet>
);

export default Fonts;
