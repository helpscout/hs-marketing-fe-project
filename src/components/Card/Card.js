import React from 'react';
import PropTypes from 'prop-types';
import Badge, { BADGE_COLORS } from '../../components/Badge/Badge'; 

import {
  CardLink,
  CardIMG,
  CardTxtP,
  CardBottomLinkSPAN
} from './Card.styles';

const Card = ({
  slug,
  img,
  permalink,
  subtitle,
  title
}) => (

  <CardLink to={permalink} className="CardLink" key={slug}>
    <Badge color={BADGE_COLORS.PURPLE} className="card-badge">PLUS</Badge>
    <CardIMG src={img} alt={title} />
    <CardTxtP>{subtitle}</CardTxtP>
    <CardBottomLinkSPAN className="card-bottom-link">Learn More</CardBottomLinkSPAN>
  </CardLink>

);

Card.propTypes = {
  slug: PropTypes.string,
  img: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Card;