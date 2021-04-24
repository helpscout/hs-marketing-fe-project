import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import NavItemOption, { NavItemOptionLI } from '../NavItemOption/NavItemOption';

export const NavItemDropdownUL = styled.ul`
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 5px 25px 0 rgba(0, 0, 0, 0.15), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
  left: -6px;
  list-style: none;
  margin: 0;
  min-width: 255px;
  opacity: 0;
  padding: 16px;
  pointer-events: none;
  position: absolute;
  top: 38px;
  transition: opacity 0.2s cubic-bezier(.165, .84, .44, 1), transform 0.2s cubic-bezier(.165, .84, .44, 1);
  will-change: opacity, transform;
  z-index: 10;

  &:hover {
    ${NavItemOptionLI} {
      will-change: opacity;
      transition: opacity 0.2s ease-in;
      opacity: 0.65;

      &:hover {
        opacity: 1;
      }
    }
  }

  ${({ useTwoColumns }) =>
    useTwoColumns &&
    css`
      display: grid;
      column-gap: 16px;
      grid-template-columns: repeat(2, 1fr);
      min-width: 620px;
    `};
`;

const NavItemDropdown = ({ options, useTwoColumns = false }) => {
  return (
    <NavItemDropdownUL useTwoColumns={useTwoColumns}>
      {options &&
        options.map((option) => <NavItemOption key={option.title} {...option} />)}
    </NavItemDropdownUL>
  );
};

NavItemDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  useTwoColumns: PropTypes.bool
};

export default NavItemDropdown;
