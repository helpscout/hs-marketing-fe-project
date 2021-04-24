import styled from 'styled-components';
import { Link } from 'gatsby';

import { getColor } from '../../../utils';

import { BadgeSPAN } from '../../Badge/Badge';

export const FooterColumnDIV = styled.div`
  flex: 0 0 100%;
  padding: 0 15px 40px;
  text-align: center;

  @media (min-width: 769px) {
    flex: 0 0 25%;
    padding-bottom: 20px;
    text-align: left;
  }

  @media (min-width: 992px) {
    flex: 0 0 18.75%; // 75% / 4
    padding-bottom: 48px;
  }
`;

export const FooterColumnH4 = styled.h4`
  color: white;
  font-size: 16px;
  margin: 0 0 16px;
`;

export const FooterColumnUL = styled.ul`
  margin-bottom: 40px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 769px) {
    margin-bottom: 20px;
  }

  @media (min-width: 992px) {
    margin-bottom: 48px;
  }
`;

export const FooterColumnLINK = styled(Link)``;

export const FooterColumnLI = styled.li`
  padding: 6px 0;

  &,
  ${FooterColumnLINK},
  a {
    color: #93A1B0;
    font-size: 14px;
    line-height: 20px;
  }

  a${FooterColumnLINK}:hover,
  ${FooterColumnLINK} a:hover,
  a${FooterColumnLINK}:focus-visible,
  ${FooterColumnLINK} a:focus-visible {
    color: white;
  }

  a${FooterColumnLINK}:focus-visible,
  ${FooterColumnLINK} a:focus-visible {
    background: #253642;
    border-radius: 4px;
    box-shadow:
      0 0 0 2px ${getColor('CHARCOAL', 800)},
      0 0 0 4px ${getColor('BLUE', 100)};
  }

  ${BadgeSPAN} {
    margin-top: -2px;
    margin-left: 8px;
  }

  svg {
    height: 7px;
    left: 1px;
    position: relative;
    top: -3px;
    width: 7px;
  }
`;
