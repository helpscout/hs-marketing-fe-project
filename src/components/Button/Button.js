import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { ButtonA, BUTTON_COLORS_CSS, BUTTON_SIZES_CSS } from './Button.styles';
import { BUTTON_COLORS, BUTTON_SIZES } from './Button.constants';

export {
  BUTTON_COLORS,
  BUTTON_COLORS_CSS,
  BUTTON_SIZES,
  BUTTON_SIZES_CSS,
  ButtonA,
};

const Button = ({
  children,
  color,
  fullwidth,
  href,
  id,
  onclick,
  size,
  target,
  useGatsbyLink,
}) => (
    <ButtonA
      // If an onclick is provided and not an href, use the `button` element,
      // otherwise use Gatsby's Link component if `useGatsbyLink` is set
      // (defaults to an `a` tag)
      as={(onclick && !href) ? 'button' : (useGatsbyLink ? Link : undefined)}
      color={color}
      fullwidth={fullwidth}
      href={useGatsbyLink ? undefined : href}
      id={id}
      onClick={onclick}
      size={size}
      target={target}
      to={useGatsbyLink ? href : undefined}
    >
      {children}
    </ButtonA>
  );

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fullwidth: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  onclick: PropTypes.func,
  size: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
