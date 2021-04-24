/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { getColor } from '../../../../utils';

import Icon, { ICON_TYPES } from '../../../Icon/Icon';

import { getNavOptionIcon } from './utils';

export const NavItemOptionLI = styled.li`
  a {
    color: #556575;
    display: flex;
    align-items: flex-start;
    padding: 8px;
    transition: all .15s ease-in-out;
    width: 100%;
  }

  &:hover a {
    color: #556575;
  }

  a:focus-visible {
    border-radius: 4px;
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${getColor('BLUE', 100)};
  }

  strong {
    color: #405261;
    display: block;
    font-size: 15px;
    font-weight: 500;
  }

  p {
    font-size: 13px;
    margin: 0;
    line-height: 1.5;
  }

  /* External link icon */
  svg {
    position: relative;
    top: -1px;
    margin-left: 4px;

    path {
      fill: #93a1b0;
    }
  }

  ${({ isButton }) => isButton && css`
    padding: 8px 0;

    a {
      border-radius: 4px;
      border: 1px solid ${getColor('ASH', 300)};
      padding: 8px 12px !important;
      position: relative;

      &:hover {
        background-color: ${getColor('BLUE', 100)};

        svg {
          right: 15px;
        }
      }
    }

    strong {
      font-size: 13px;
    }

    p {
      font-size: 11px;
      line-height: 1.4;
    }

    svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      width: 12px;
      height: 12px;
      transition: right 0.3s;

      path {
        fill: #c5ced6;
      }
    }
  `}

  ${({ showDescription }) => !showDescription && css`
    strong {
      font-size: 17px;
    }
  `}
`;

export const NavItemOptionIMG = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

const NavItemOption = ({
  description,
  icon = null,
  isButton = false,
  isExternal = false,
  link,
  showDescription = true,
  title,
  useLink = false,
}) => {
  const renderChildren = () => (
    <>
      {icon && <NavItemOptionIMG src={getNavOptionIcon(icon)} alt={`Icon: ${title}`} role="img" />}
      <span>
        <strong>
          {title}
          {isExternal && <Icon type={ICON_TYPES.EXTERNAL_LINK} />}
        </strong>
        {showDescription && <p>{description}</p>}
      </span>
      {isButton && <Icon type={ICON_TYPES.ARROW_RIGHT} />}
    </>
  );

  return (
    <NavItemOptionLI isButton={isButton} role="none" showDescription={showDescription}>
      {useLink ? (
        <Link to={link}>{renderChildren()}</Link>
      ) : (
          <a
            href={link}
            role="menuitem"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener' : undefined}
          >
            {renderChildren()}
          </a>
        )}
    </NavItemOptionLI>
  )
};

NavItemOption.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isButton: PropTypes.bool,
  isExternal: PropTypes.bool,
  link: PropTypes.string.isRequired,
  showDescription: PropTypes.bool,
  title: PropTypes.string.isRequired,
  useLink: PropTypes.bool,
};

export default NavItemOption;
