import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import xss from 'xss';
import { getColor } from '../../../utils';

import {
  IntegrationCalloutDIV,
  IntegrationCalloutBtn,
  IntegrationCalloutContentDIV,
  IntegrationCalloutBtnWrapperDIV,
  PillSPAN,
} from './IntegrationCallout.styles';


const IntegrationCallout = ({
  slug,
  img,
  permalink,
  subtitle,
  title
}) => (

    <IntegrationCalloutDIV>
      <IntegrationCalloutContentDIV>
          <PillSPAN>PLUS</PillSPAN>
          <h3 dangerouslySetInnerHTML={{ __html: xss(title) }} />
          <p>{img}</p>
          <p>{subtitle}</p>
          <p>{permalink}</p>
      </IntegrationCalloutContentDIV>

      <IntegrationCalloutBtnWrapperDIV>
        <IntegrationCalloutBtn href={permalink}>
          Learn More
        </IntegrationCalloutBtn>
      </IntegrationCalloutBtnWrapperDIV>

       
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