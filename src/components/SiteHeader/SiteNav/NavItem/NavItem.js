import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor } from '../../../../utils';

import NavItemDropdown, { NavItemDropdownUL } from '../NavItemDropdown/NavItemDropdown';

export const NavItemA = styled.a`
  padding: 13px 20px;
  font-weight: 400;
  font-size: 15px;
  color: #556575;
  cursor: pointer;

  &:hover {
    color: #253642;
  }

  &:focus-visible {
    border-radius: 4px;
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${getColor('BLUE', 100)};
  }

  ${({ hasDropdown }) =>
    hasDropdown &&
    css`
      /* Caret-down */
      &::after {
        border-top-width: 2px;
        border-top-style: solid;
        border-right-width: 2px;
        border-right-style: solid;
        content: "";
        display: inline-block;
        margin-left: 0.3em;
        position: relative;
        pointer-events: none;
        width: 6px;
        height: 6px;
        transform: rotate(135deg);
        transition: all 0.15s;
        vertical-align: middle;
        top: -2px;
        left: 2px;
      }
    `};
`;

export const NavItemLI = styled.li`
  display: inline-block;
  position: relative;

  &:hover ${NavItemDropdownUL},
  &:focus-within ${NavItemDropdownUL} {
    opacity: 1;
    transform: translateY(-6px);
    pointer-events: visible;
  }
`;

const NavItem = ({ link, title, options, useTwoColumns }) => {
  const hasDropdown = !!options;

  return (
    <NavItemLI role="none">
      <NavItemA
        as={link ? undefined : 'span'}
        href={link ? link : undefined}
        hasDropdown={hasDropdown}
        role={link ? 'menuitem' : 'none'}
      >
        {title}
      </NavItemA>
      {hasDropdown && <NavItemDropdown options={options} useTwoColumns={useTwoColumns} />}
    </NavItemLI>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  useTwoColumns: PropTypes.bool
};

export default NavItem;
