import React from 'react';
import PropTypes from 'prop-types';
import xss from 'xss';

import Container from '../../Container/Container';

import {
  IntegrationCalloutDIV,
  IntegrationCalloutContentWrapperDIV,
  IntegrationCalloutContentDIV,
  IntegrationCalloutBtn
} from './IntegrationCallout.styles';


const IntegrationCallout = ({
  slug,
  img,
  permalink,
  subtitle,
  title
}) => (

    <IntegrationCalloutDIV>
    <Container>
      <IntegrationCalloutContentWrapperDIV>
        <IntegrationCalloutContentDIV>
          <h3 dangerouslySetInnerHTML={{ __html: xss(title) }} />
          <p>{img}</p>
          <p>{subtitle}</p>
          <p>{permalink}</p>
          <IntegrationCalloutBtn href="#">
            Learn More [side arrow]
            </IntegrationCalloutBtn>
        </IntegrationCalloutContentDIV>
      </IntegrationCalloutContentWrapperDIV>
    </Container>
  </IntegrationCalloutDIV> 
);

IntegrationCallout.propTypes = {
  slug: PropTypes.string,
  img: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default IntegrationCallout;