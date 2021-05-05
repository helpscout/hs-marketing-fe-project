import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import xss from 'xss';
import { getColor } from '../../../utils';

import {
  IntegrationCalloutDIV,
  IntegrationCalloutBtn,
  IntegrationCalloutContentDIV,
  IntegrationCalloutImgWrapper,
  IntegrationCalloutBtnWrapperDIV,
  PillWrapperDIV,
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
            <PillWrapperDIV>
              <PillSPAN>PLUS</PillSPAN>
            </PillWrapperDIV>
            
            <IntegrationCalloutImgWrapper>
              <img src={img} alt={title} />
            </IntegrationCalloutImgWrapper>
            
            <p>{subtitle}</p>
        </IntegrationCalloutContentDIV>

        <IntegrationCalloutBtnWrapperDIV className="btn-wrapper">
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