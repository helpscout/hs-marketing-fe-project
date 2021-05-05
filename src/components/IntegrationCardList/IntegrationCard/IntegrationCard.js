import React from 'react';
import PropTypes from 'prop-types';

import {
  IntegrationCardDIV,
  IntegrationCardBtn,
  IntegrationCardContentDIV,
  IntegrationCardImgWrapper,
  IntegrationCardBtnWrapperDIV,
  PillWrapperDIV,
  PillSPAN,
} from './IntegrationCard.styles';


const IntegrationCard = ({
  slug,
  img,
  permalink,
  subtitle,
  title
}) => (

      <IntegrationCardDIV>
        <IntegrationCardContentDIV>
            <PillWrapperDIV>
              <PillSPAN>PLUS</PillSPAN>
            </PillWrapperDIV>
            
            <IntegrationCardImgWrapper>
              <img src={img} alt={title} />
            </IntegrationCardImgWrapper>
            
            <p>{subtitle}</p>
        </IntegrationCardContentDIV>

        <IntegrationCardBtnWrapperDIV className="btn-wrapper">
          <IntegrationCardBtn href={permalink}>
            Learn More
          </IntegrationCardBtn>
        </IntegrationCardBtnWrapperDIV>
      </IntegrationCardDIV> 
);

IntegrationCard.propTypes = {
  slug: PropTypes.string,
  img: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default IntegrationCard;