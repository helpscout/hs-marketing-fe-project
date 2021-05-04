import React from 'react';
import PropTypes from 'prop-types';
import xss from 'xss';

import Button, { BUTTON_SIZES } from '../Button/Button';
import Container from '../Container/Container';

import {
  GetStartedCalloutDIV,
  GetStartedCalloutContentWrapperDIV,
  GetStartedCalloutContentDIV,
} from './GetStartedCallout.styles';

import {
  GET_STARTED_CALLOUT_THEMES,
  GET_STARTED_DEFAULT_CTA_TEXT,
  GET_STARTED_DEFAULT_TITLE,
} from './GetStartedCallout.constants';

const GetStartedCallout = ({
  ctaText = GET_STARTED_DEFAULT_CTA_TEXT,
  theme = GET_STARTED_CALLOUT_THEMES.DEFAULT,
  title = GET_STARTED_DEFAULT_TITLE,
}) => (
  <GetStartedCalloutDIV theme={theme}>
    <Container>
      <GetStartedCalloutContentWrapperDIV>
        <GetStartedCalloutContentDIV>
          <h3 dangerouslySetInnerHTML={{ __html: xss(title) }} />
          <p>{ctaText}</p>
          <Button href="#" size={BUTTON_SIZES.L}>
            Free 15-day Trial
            </Button>
        </GetStartedCalloutContentDIV>
      </GetStartedCalloutContentWrapperDIV>
    </Container>
    {theme === GET_STARTED_CALLOUT_THEMES.INDIGO && (
      <>
        <img
          alt=""
          className="brush brush-top-right"
          src="/images/components/GetStartedCallout/GetStartedCallout--indigo--brush-top-right.png"
        />
        <img
          alt=""
          className="brush brush-bottom-left"
          src="/images/components/GetStartedCallout/GetStartedCallout--indigo--brush-bottom-left.png"
        />
      </>
    )}
    {theme === GET_STARTED_CALLOUT_THEMES.ILLO && (
      <>
        <img
          alt=""
          className="illo illo--clouds"
          src="/images/components/GetStartedCallout/GetStartedCallout--illo-museum-top-left.png"
        />
        <img
          alt=""
          className="illo illo--clouds--2"
          src="/images/components/GetStartedCallout/GetStartedCallout--illo-museum-top-left.png"
        />
        <img
          alt=""
          className="illo illo--sculpture"
          src="/images/components/GetStartedCallout/GetStartedCallout--illo-museum-bottom-right.png"
        />
      </>
    )}
  </GetStartedCalloutDIV>
);

GetStartedCallout.propTypes = {
  ctaText: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(GET_STARTED_CALLOUT_THEMES)),
};

export {
  GET_STARTED_CALLOUT_THEMES,
};

export default GetStartedCallout;